import { Text, View } from 'react-native'

import { styled } from 'nativewind'

const StyledView = styled(View)
const StyledText = styled(Text)

type Props = {
  one: string
  two: string
}

export function ProfileImage({ one, two }: Props) {
  return (
    <StyledView className="flex-row h-32 w-32 bg-gray-800 rounded-full items-center justify-center">
      <StyledText className="text-yellow-500 font-bold text-4xl uppercase">
        {one}
      </StyledText>
      <StyledText className="text-yellow-500 font-bold text-4xl uppercase">
        {two}
      </StyledText>
    </StyledView>
  )
}
