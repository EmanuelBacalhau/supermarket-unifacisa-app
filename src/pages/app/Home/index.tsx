import { useState } from 'react'
import { FlatList, View } from 'react-native'

import { HeaderHome } from './components/HeaderHome'
import { CardProduct } from './components/CardProduct'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProp } from '../../../routes/app-routes'

import { styled } from 'nativewind'

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
