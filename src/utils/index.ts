import { create } from 'zustand'

export type ActiveType = "home" | "work" | "experience" | "skills" | "contact";
type ActiveSectionStore = {
  active: ActiveType
  setActive: (item: ActiveType) => void
  timeOfLastClick: number
  setTimeOfLastClick: (item: number) => void
}

export const useActiveSection = create<ActiveSectionStore>((set) => ({
  active: "home",
  setActive: (item) => set({ active: item }),
  timeOfLastClick: 0,
  setTimeOfLastClick: (item) => set({ timeOfLastClick: item }),
}))
