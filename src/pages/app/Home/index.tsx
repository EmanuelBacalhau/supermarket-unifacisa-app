import { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'

import { HeaderHome } from './components/HeaderHome'
import { CardProduct } from './components/CardProduct'
import { useNavigation } from '@react-navigation/native'
import { AppNavigatorRoutesProp } from '../../../routes/app-routes'

import { styled } from 'nativewind'
import { AppError } from '../../../utils/AppError'
import Toast from 'react-native-toast-message'
import { api } from '../../../services/api'
import { ProductDto } from '../../../dtos/ProductDto'

const StyledView = styled(View)
const StyledFlatList = styled(FlatList<ProductDto>)

export function Home() {
  const [products, setProducts] = useState<ProductDto[]>([])

  const navigation = useNavigation<AppNavigatorRoutesProp>()

  async function fetchProducts() {
    try {
      const response = await api.get<ProductDto[]>('/products')
      setProducts(response.data)
    } catch (error) {
      const isAppError = error instanceof AppError
      const message = isAppError ? error.message : 'Internal server error'

      Toast.show({
        text1: message,
        type: 'error',
        position: 'top',
        topOffset: 60,
      })
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  function handleOpenProduct(productId: string) {
    navigation.navigate('product', {
      productId,
    })
  }

  return (
    <StyledView className="flex-1">
      <HeaderHome />

      <StyledFlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <CardProduct data={item} handleDetailsPage={handleOpenProduct} />
          )
        }}
        className="my-2 mx-2"
        showsVerticalScrollIndicator={false}
      />
    </StyledView>
  )
}
