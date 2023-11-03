import { Image, Text, View } from 'react-native'

import { styled } from 'nativewind'

const StyledView = styled(View)

export function Home() {
  return (
    <StyledView className="flex-1 items-center justify-center">
      <Text>Seja bem vindo!!</Text>
    </StyledView>
  )
}
