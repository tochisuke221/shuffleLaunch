'use client'

import Select, { SelectProps } from '@mui/material/Select'
import { forwardRef } from 'react'

export type MuiSelectProps = SelectProps

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const MuiSelect = forwardRef<any, SelectProps>((props, ref) => (
  <Select inputRef={ref} {...props} />
))
