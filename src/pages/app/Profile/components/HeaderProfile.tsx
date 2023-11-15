import { Text, TouchableOpacity, View } from 'react-native'

import { styled } from 'nativewind'
import { ClockCounterClockwise, ArrowLeft } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProp } from '../../../../routes/app-routes'

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledArrowLeft = styled(ArrowLeft)
const StyledClockCounterClockwise = styled(ClockCounterClockwise)

export function HeaderProfile() {
  const router = useNavigation<AppNavigatorRoutesProp>()

  function handleGoBack() {
    return router.navigate('home')
  }
  function handleGoHistoric() {
    return router.navigate('historic')
  }

  return (
    <StyledView className="flex-row justify-between pt-14 pb-4 px-4 bg-yellow-500">
      <TouchableOpacity onPress={handleGoBack}>
        <StyledArrowLeft size={25} weight="bold" className="text-white" />
      </TouchableOpacity>
      <StyledText className="text-center font-bold text-xl uppercase text-white">
        Profile
      </StyledText>
      <TouchableOpacity onPress={handleGoHistoric}>
        <StyledClockCounterClockwise
          size={25}
          weight="bold"
          className="text-white"
        />
      </TouchableOpacity>
    </StyledView>
  )
}
