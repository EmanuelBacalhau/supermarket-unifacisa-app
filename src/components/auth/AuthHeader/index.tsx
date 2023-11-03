import { Text } from 'react-native'

import Animated, { Easing, FadeInUp } from 'react-native-reanimated'

import { Basket } from 'phosphor-react-native'

import { styled } from 'nativewind'

const StyledBasket = styled(Basket)
const StyledText = styled(Text)

const StyledAnimatedView = styled(Animated.View)

export function AuthHeader() {
  return (
    <StyledAnimatedView
      className="items-center"
      entering={FadeInUp.duration(1000).easing(Easing.ease)}
    >
      <StyledBasket className="text-orange-600" size={90} />
      <StyledText className="text-5xl text-blue-900 font-bold">
        Unifacisa
      </StyledText>
      <StyledText className="text-5xl text-orange-600 font-bold">
        Supermarket
      </StyledText>
    </StyledAnimatedView>
  )
}
