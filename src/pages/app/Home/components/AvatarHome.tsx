import { Image } from 'react-native'

import { styled } from 'nativewind'
import { useAuth } from '../../../../hooks/useAuth'

const StyledImage = styled(Image)

export function AvatarHome() {
  const { user } = useAuth()

  return (
    <StyledImage
      source={{ uri: user.avatar }}
      className="flex-row h-14 w-14 bg-black rounded-full items-center justify-center"
    />
  )
}
