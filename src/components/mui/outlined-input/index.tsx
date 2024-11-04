'use client'

import OutlinedInput, { OutlinedInputProps } from '@mui/material/OutlinedInput'
import { forwardRef } from 'react'

export type MuiOutlinedInputProps = OutlinedInputProps

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const MuiOutlinedInput = forwardRef<any, OutlinedInputProps>((props, ref) => (
  <OutlinedInput inputRef={ref} {...props} />
));
