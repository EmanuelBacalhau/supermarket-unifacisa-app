import { Text, View } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import Animated, { Easing, FadeInDown } from 'react-native-reanimated'

import { ButtonUI } from '../../ui/ButtonUI'
import { AuthNavigatorRoutesProps } from '../../../routes/auth-routes'

import { styled } from 'nativewind'

const StyledText = styled(Text)
const StyledView = styled(View)
const StyledAnimatedView = styled(Animated.View)

interface Props {
  page: 'signIn' | 'signUp'
  content: string
  titleButton: string
}

export function AuthHandlePage({ page, content, titleButton }: Props) {
  const router = useNavigation<AuthNavigatorRoutesProps>()

  const handlePage = () => {
    router.replace(page)
  }

  return (
    <StyledAnimatedView
      className="items-center"
      entering={FadeInDown.duration(1000).easing(Easing.ease)}
    >
      <StyledView className="w-[90%]">
        <StyledText className="text-center text-lg font-bold text-white mb-1">
          {content}
        </StyledText>

        <ButtonUI type="outline" title={titleButton} onPress={handlePage} />
      </StyledView>
    </StyledAnimatedView>
  )
}
