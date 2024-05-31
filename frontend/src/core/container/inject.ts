// eslint-disable-next-line no-restricted-imports
import type { InjectionKey } from 'vue'
import { inject } from 'vue'

export function injectionKey<T>(): InjectionKey<T> {
  return Symbol('injectionKey')
}

export function injectStrict<T>(key: InjectionKey<T>, fallback?: T) {
  const resolved = inject(key, fallback)
  if (typeof resolved === 'undefined' || resolved === null) {
    throw new Error(`Injection failed: could not resolve ${key}`)
  }

  return resolved
}

export function injectOptional<T>(key: InjectionKey<T>) {
  // Note: the 'undefined' prevents the vue warning for intentional optional injections
  return inject(key, undefined)
}
