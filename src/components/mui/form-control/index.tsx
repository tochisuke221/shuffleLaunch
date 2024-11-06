'use client'

import FormControl, { FormControlProps } from '@mui/material/FormControl'
import { forwardRef } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const MuiFormControl = forwardRef<any, FormControlProps>((props, ref) => (
  <FormControl ref={ref} {...props} />
))
