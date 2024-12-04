import { create, StateCreator } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { devtools } from 'zustand/middleware'

type State = {
  count: number
}

type Actions = {
  increment: (qty: number) => void
  decrement: (qty: number) => void
}
export type CountStore = State & Actions
export const useCountStore = create(

  devtools(
    immer<CountStore>((set) => ({
        count: 0,
        increment: (qty: number) =>
          set((state) => {
            state.count += qty
          }),
        decrement: (qty: number) =>
          set((state) => {
            state.count -= qty
          }),
      })) as StateCreator<unknown, [], []>
  ) as   StateCreator<unknown, [], []>
)



