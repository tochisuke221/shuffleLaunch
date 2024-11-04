'use client'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { ReactNode } from 'react'
import { theme } from '@/lib/mui'


type Props = {
  children: ReactNode
}

export const MuiProvider = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        {children}
    </ThemeProvider>
  )
}
