import type { Pastry } from './pastry'

export interface AppBaker {
  readonly id: string
  readonly name: string
  readonly quota: string
  readonly flavours: string[]
  readonly pastries: Pastry[]
}
