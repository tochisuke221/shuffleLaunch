'use client'

import Grid, { Grid2Props } from '@mui/material/Grid2'
import { ElementType, Ref, forwardRef } from 'react'

export const MuiGrid = forwardRef(
  <T extends ElementType>(props: Grid2Props<T>, ref: Ref<HTMLDivElement>) => (
    <Grid ref={ref} {...props} />
  ),
)
