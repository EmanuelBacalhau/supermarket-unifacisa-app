import { Text, View } from 'react-native'

import { styled } from 'nativewind'

const StyledView = styled(View)
const StyledText = styled(Text)

export function Cart() {
  const products = ['1', '2', '3', '74', '5']
  return (
    <StyledView className="flex-1">
      <StyledView className="pt-14 pb-4 bg-yellow-500">
        <StyledText className="uppercase font-bold text-xl text-center text-white">
          My Cart
        </StyledText>
      </StyledView>
      <StyledView className="flex-row justify-between px-4 my-5">
        <StyledText className="uppercase text-base font-bold text-gray-900">
          My products
        </StyledText>
        <StyledText className="uppercase text-base font-bold text-gray-500">
          {products.length}
        </StyledText>
      </StyledView>
    </StyledView>
  )
}
