import { View, Text, Pressable, Image, PressableProps } from 'react-native'

import { styled } from 'nativewind'
import { ProductDto } from '../../../../dtos/ProductDto'
import { api } from '../../../../services/api'

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledImage = styled(Image)
const StyledPressable = styled(Pressable)

type Props = PressableProps & {
  data: ProductDto
  handleDetailsPage: (productId: string) => void
}
export function CardProduct({ data, handleDetailsPage, ...props }: Props) {
  return (
    <StyledPressable
      onPress={() => handleDetailsPage(data.id)}
      key={data.id}
      {...props}
      className="flex-row py-3 px-3 border border-gray-500 rounded-md mb-1 items-center"
    >
      <StyledImage
        source={{
          uri: `${api.defaults.baseURL}/products/${data.imageUrl}`,
        }}
        width={100}
        height={60}
        className="mr-4"
        resizeMode="cover"
      />

      <StyledView className="flex-1 justify-between">
        <StyledText
          className="font-bold text-lg text-gray-800"
          numberOfLines={1}
        >
          {data.name}
        </StyledText>
        <StyledView>
          <StyledText className="text-base line-through text-gray-800/50">
            R$ {(data.price + 100).toFixed(2)}
          </StyledText>
          <StyledText className="text-2xl font-bold shadow text-gray-900">
            R$ {data.price.toFixed(2)}
          </StyledText>
        </StyledView>
        <StyledText className="text-sm text-right font-bold text-gray-800/40">
          {data.amount}
        </StyledText>
      </StyledView>
    </StyledPressable>
  )
}
