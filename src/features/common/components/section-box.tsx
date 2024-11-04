import { useTheme } from '@mui/material/styles'
import { ReactNode } from 'react'
import { MuiBox, MuiStack, MuiTypography } from '@/components/mui'

type Props = {
  icon?: ReactNode
  title: string
  actions?: ReactNode
  children: ReactNode
}

export const SectionBox = ({ icon, title, actions, children }: Props) => {
  const theme = useTheme()

  return (
    <MuiStack
      p={5}
      spacing={5}
      sx={{
        backgroundColor: theme.palette.common.white,
        border: `1px solid ${theme.palette.common.gray}`,
        borderRadius: 2,
      }}
    >
      <MuiStack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <MuiStack direction="row" alignItems="center" spacing={1}>
          {icon}
          <MuiTypography variant="h6">{title}</MuiTypography>
        </MuiStack>
        <MuiBox>{actions}</MuiBox>
      </MuiStack>
      {children}
    </MuiStack>
  )
}
