import type { App, InjectionKey, Plugin } from 'vue'

type UnpackInjectionKey<Type> = Type extends InjectionKey<infer X> ? X : never

export type Container<TKey> = { [key in keyof TKey]: any }
export type ContainerDefinition<TKey> = {
  [key in keyof TKey]: (c: Container<TKey>) => UnpackInjectionKey<TKey[key]>
}

function buildContainer<T>(definition: ContainerDefinition<T>): T {
  // @ts-expect-error ignore doesn't handle errors
  const container: T = {}

  Object.keys(definition).forEach((key) => {
    let item: any = null

    Object.defineProperty(container, key, {
      get() {
        if (item === null) {
          // @ts-expect-error ignore doesn't handle errors
          item = definition[key](container)
        }

        return item
      }
    })
  })

  return container
}

const container: Plugin = {
  install: <TKey>(
    app: App,
    {
      providerKeys,
      definition
    }: { providerKeys: any; definition: ContainerDefinition<TKey> }
  ) => {
    const appContainer = buildContainer(definition)

    Object.getOwnPropertyNames(appContainer).forEach((key) => {
      app.provide(providerKeys[key], appContainer[key as keyof TKey])
    })
  }
}

export default container
