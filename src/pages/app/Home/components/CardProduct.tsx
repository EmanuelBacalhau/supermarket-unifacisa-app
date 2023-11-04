import { View, Text, Pressable, Image, PressableProps } from 'react-native'

import { styled } from 'nativewind'

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledImage = styled(Image)
const StyledPressable = styled(Pressable)

type Props = PressableProps

export function CardProduct({ ...props }: Props) {
  return (
    <StyledPressable
      {...props}
      className="flex-row py-3 px-3 bg-gray-600/80 rounded-md mb-1 items-center"
    >
      <StyledImage
        source={{
          uri: 'https://conteudo.imguol.com.br/c/noticias/5e/2020/09/24/amazon-echo-2020-1600973477197_v2_450x337.png',
        }}
        className="h-20 w-20 mr-3 rounded-full"
        resizeMode="center"
      />

      <StyledView className="flex-1 justify-between">
        <StyledText
          className="font-bold text-lg text-gray-800"
          numberOfLines={1}
        >
          Novo Echo Dot 5ª geração | O Echo Dot com o melhor som já lançado |
          Cor Preta
        </StyledText>
        <StyledView>
          <StyledText className="text-base line-through text-gray-200/50">
            R$ 150.00
          </StyledText>
          <StyledText className="text-2xl font-bold shadow text-gray-100">
            R$ 50.00
          </StyledText>
        </StyledView>
        <StyledText className="text-sm text-right font-bold text-gray-200/40">
          50
        </StyledText>
      </StyledView>
    </StyledPressable>
  )
}
