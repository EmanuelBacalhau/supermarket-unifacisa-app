import { FlatList, View } from 'react-native'

import { styled } from 'nativewind'
import { HeaderHome } from './components/HeaderHome'
import { CardProduct } from './components/CardProduct'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProp } from '../../../routes/app-routes'

const StyledView = styled(View)
const StyledFlatList = styled(FlatList)

export function Home() {
  const [products] = useState([
    {
      name: 'Teste',
      promotionPrice: 150,
      price: 50,
      amount: 20,
    },
    {
      name: 'Teste',
      promotionPrice: 150,
      price: 50,
      amount: 20,
    },
    {
      name: 'Teste',
      promotionPrice: 150,
      price: 50,
      amount: 20,
    },
    {
      name: 'Teste',
      promotionPrice: 150,
      price: 50,
      amount: 20,
    },
    {
      name: 'Teste',
      promotionPrice: 150,
      price: 50,
      amount: 20,
    },
    {
      name: 'Teste',
      promotionPrice: 150,
      price: 50,
      amount: 20,
    },
    {
      name: 'Teste',
      promotionPrice: 150,
      price: 50,
      amount: 20,
    },
    {
      name: 'Teste',
      promotionPrice: 150,
      price: 50,
      amount: 20,
    },
  ])

  const navigation = useNavigation<AppNavigatorRoutesProp>()

  function handleOpenProduct() {
    navigation.navigate('product')
  }

  return (
    <StyledView className="flex-1">
      <HeaderHome />

      <StyledFlatList
        data={products}
        renderItem={({ item }) => {
          return <CardProduct onPress={handleOpenProduct} />
        }}
        className="my-2 mx-2"
        showsVerticalScrollIndicator={false}
      />
    </StyledView>
  )
}
