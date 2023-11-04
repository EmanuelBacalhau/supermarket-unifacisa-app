import { Text, View } from 'react-native'

import { styled } from 'nativewind'

const StyledView = styled(View)
const StyledText = styled(Text)

export function HeaderProfile() {
  return (
    <StyledView className="pt-14 pb-4 bg-yellow-500">
      <StyledText className="text-center font-bold text-xl uppercase text-white">
        Profile
      </StyledText>
    </StyledView>
  )
}
