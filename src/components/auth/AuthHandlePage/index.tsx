import { Text, View } from 'react-native'

import Animated, { Easing, FadeInDown } from 'react-native-reanimated'

import { ButtonUI } from '../../ui/ButtonUI'

import { styled } from 'nativewind'

const StyledText = styled(Text)
const StyledView = styled(View)
const StyledAnimatedView = styled(Animated.View)

export function AuthHandlePage() {
  return (
    <StyledAnimatedView
      className="items-center"
      entering={FadeInDown.duration(1000).easing(Easing.ease)}
    >
      <StyledView className="w-[90%]">
        <StyledText className="text-center text-lg font-bold text-white mb-1">
          Do not have account?
        </StyledText>

        <ButtonUI type="outline" title="Register" />
      </StyledView>
    </StyledAnimatedView>
  )
}
