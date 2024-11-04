'use client'

import Box, { BoxProps } from '@mui/material/Box'
import { ElementType, Ref, forwardRef } from 'react'

export const MuiBox = forwardRef(<T extends ElementType>(props: BoxProps<T>, ref: Ref<unknown>) => (
  <Box ref={ref} {...props} />
))
