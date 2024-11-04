'use client'

import Stack, { StackProps } from '@mui/material/Stack'
import { ElementType, forwardRef, Ref } from 'react'

export const MuiStack = forwardRef(
  <T extends ElementType>(props: StackProps<T>, ref: Ref<HTMLDivElement>) => (
    <Stack ref={ref} {...props} />
  ),
)
