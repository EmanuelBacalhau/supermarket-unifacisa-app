import { ScrollView, View } from 'react-native'

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
    <StyledView className="flex-1">
      <HeaderProduct onPress={handleGoBackHome} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <CardProductDetails />
      </ScrollView>
    </StyledView>
  )
}
