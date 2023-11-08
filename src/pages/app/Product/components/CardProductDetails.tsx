import { View, Image, Text } from 'react-native'

import { styled } from 'nativewind'
import { ButtonUI } from '../../../../components/ui/ButtonUI'
import { api } from '../../../../services/api'
import { ProductDetailsDto } from '../../../../dtos/ProductDetails'

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledImage = styled(Image)

type Props = {
  data: ProductDetailsDto
}

export function CardProductDetails({ data }: Props) {
  return (
    <StyledView className="px-4 py-4">
      <StyledView className="items-center">
        <StyledImage
          source={{
            uri: `${api.defaults.baseURL}/products/${data.imageUrl}`,
          }}
          className="h-64 w-64"
          resizeMode="center"
        />
      </StyledView>

      <StyledView className="mt-3">
        <StyledText className="text-xl font-bold">{data?.name}</StyledText>

        <StyledView className="mt-3">
          <StyledText className="text-lg font-bold line-through text-gray-800/50">
            R$ {(data.price + 100).toFixed(2)}
          </StyledText>

          <StyledView className="flex-row justify-between items-end">
            <StyledText className="text-2xl font-bold text-gray-800">
              R$ {data.price && data.price.toFixed(2)}
            </StyledText>
            <StyledText className="text-base font-bold text-gray-800/40 text-center">
              {data.amount}
            </StyledText>
          </StyledView>
        </StyledView>
      </StyledView>

      <StyledView className="w-full my-3">
        <ButtonUI title="Add cart" />
      </StyledView>

      <StyledView>
        <StyledText className="text-lg font-semibold text-gray-800 mb-1">
          Description:
        </StyledText>

        <StyledText className="text-base text-gray-600 text-justify">
          {data.description}
        </StyledText>
      </StyledView>
    </StyledView>
  )
}
