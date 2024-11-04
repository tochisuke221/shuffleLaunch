'use client'

import { ReactNode, createContext, useContext } from 'react'
import { useToggle } from '@/hooks/use-toggle'

type SideNavigationContext = {
  openSideNavigation: boolean
  toggleSideNavigation: (value?: boolean) => void
}

const SideNavigationContext = createContext<SideNavigationContext>({
  openSideNavigation: false,
  toggleSideNavigation() {
    throw new Error('missing method')
  },
})

type Props = {
  children: ReactNode
}

export const SideNavigationProvider = ({ children }: Props) => {
  const [openSideNavigation, toggle] = useToggle(false)

  const toggleSideNavigation = (value?: boolean) => {
    toggle(value)
  }

  return (
    <SideNavigationContext.Provider
      value={{
        openSideNavigation,
        toggleSideNavigation,
      }}
    >
      {children}
    </SideNavigationContext.Provider>
  )
}

export const useSideNavigationContext = () => useContext(SideNavigationContext)
