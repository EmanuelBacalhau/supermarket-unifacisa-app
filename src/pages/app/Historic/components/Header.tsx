import { Text, TouchableOpacity, View } from 'react-native'

import { styled } from 'nativewind'
import { ArrowLeft } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProp } from '../../../../routes/app-routes'

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledArrowLeft = styled(ArrowLeft)

export function Header() {
  const router = useNavigation<AppNavigatorRoutesProp>()

  function handleGoBack() {
    return router.navigate('profile')
  }

  return (
    <StyledView className="flex-row items-center justify-between pt-14 pb-4 px-4 bg-yellow-500">
      <TouchableOpacity onPress={handleGoBack}>
        <StyledArrowLeft className="text-white" size={25} weight="bold" />
      </TouchableOpacity>
      <StyledText className="text-center font-bold text-xl uppercase text-white">
        Historic Orders
      </StyledText>

      <StyledView className="h-6 w-6" />
    </StyledView>
  )
}
