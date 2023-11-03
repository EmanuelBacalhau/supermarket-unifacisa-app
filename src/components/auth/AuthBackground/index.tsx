import { Image } from 'react-native'

import { styled } from 'nativewind'

import background from '../../../assets/bg-supermarket.jpg'

const StyledImage = styled(Image)

export function AuthBackground() {
  return (
    <StyledImage
      source={background}
      alt="image-background"
      className="absolute"
    />
  )
}
