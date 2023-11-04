import { View, Text } from 'react-native'

import { styled } from 'nativewind'

const StyledView = styled(View)
const StyledText = styled(Text)

type Props = {
  first: string
  second: string
}

export function AvatarHome({ first, second }: Props) {
  return (
    <StyledView className="flex-row h-14 w-14 bg-black rounded-full items-center justify-center">
      <StyledText className="text-yellow-500 font-bold text-xl">
        {first}
      </StyledText>
      <StyledText className="text-yellow-500 font-bold text-xl">
        {second}
      </StyledText>
    </StyledView>
  )
}
