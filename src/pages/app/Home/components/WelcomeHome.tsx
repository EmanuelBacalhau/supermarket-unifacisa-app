import { Text, View } from 'react-native'

import { styled } from 'nativewind'

const StyledView = styled(View)
const StyledText = styled(Text)

type Props = {
  name: string
}

export function WelcomeHome({ name }: Props) {
  return (
    <StyledView className="ml-2 flex-1">
      <StyledText className="text-base text-gray-50">Olá,</StyledText>
      <StyledText className="font-bold text-lg text-gray-50">{name}</StyledText>
    </StyledView>
  )
}
