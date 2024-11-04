import Image from 'next/image'
import { MuiBox } from '@/components/mui'

const logoImageHeight = 400
const logoImageWidth = 400

type Props = {
  height?: number
  width?: number
}

export const LogoImage = ({ height, width }: Props) => {
  let h = 0
  let w = 0

  if (height) {
    h = height
    w = height * (logoImageWidth / logoImageHeight)
  } else if (width) {
    h = width * (logoImageHeight / logoImageWidth)
    w = width
  }

  return (
    <MuiBox position="relative" height={h} width={w}>
      <Image src="/images/logo.png" alt="ロゴ" fill priority />
    </MuiBox>
  )
}
