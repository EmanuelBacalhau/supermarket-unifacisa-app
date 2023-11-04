import { View } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { HeaderProduct } from './components/HeaderProduct'

import { styled } from 'nativewind'
import { CardProductDetails } from './components/CardProductDetails'

const StyledView = styled(View)

export function Product() {
  const navigation = useNavigation()

  function handleGoBackHome() {
    navigation.goBack()
  }
  return (
    <StyledView>
      <HeaderProduct onPress={handleGoBackHome} />

      <CardProductDetails />
    </StyledView>
  )
}
