import { View, Image, Text } from 'react-native'

import { styled } from 'nativewind'
import { ButtonUI } from '../../../../components/ui/ButtonUI'

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledImage = styled(Image)

export function CardProductDetails() {
  return (
    <StyledView className="px-4 py-4 items-center">
      <StyledImage
        source={{
          uri: 'https://conteudo.imguol.com.br/c/noticias/5e/2020/09/24/amazon-echo-2020-1600973477197_v2_450x337.png',
        }}
        className="h-64 w-64"
        resizeMode="cover"
      />

      <StyledView className="mt-3">
        <StyledText className="text-xl font-bold">
          Novo Echo Dot 5ª geração | O Echo Dot com o melhor som já lançado |
          Cor Preta
        </StyledText>

        <StyledView className="mt-3">
          <StyledText className="text-lg font-bold line-through text-gray-800/50">
            R$ 400.00
          </StyledText>

          <StyledView className="flex-row justify-between items-end">
            <StyledText className="text-2xl font-bold text-gray-800">
              R$ 321.00
            </StyledText>
            <StyledText className="text-base font-bold text-gray-800/40 text-center">
              50
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quia
          atque cumque, explicabo sed earum, praesentium aperiam sunt quam cum
          eos ipsa excepturi doloremque qui mollitia porro amet ratione alias.
          lore Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          quia atque cumque, explicabo sed earum, praesentium aperiam sunt quam
          cum eos ipsa excepturi doloremque qui mollitia porro amet ratione
          alias. lore Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Minus quia atque cumque, explicabo sed earum, praesentium aperiam sunt
          quam cum eos ipsa excepturi doloremque qui mollitia porro amet ratione
          alias. lore Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Minus quia atque cumque, explicabo sed earum, praesentium aperiam sunt
          quam cum eos ipsa excepturi doloremque qui mollitia porro amet ratione
          alias. lore Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Minus quia atque cumque, explicabo sed earum, praesentium aperiam sunt
          quam cum eos ipsa excepturi doloremque qui mollitia porro amet ratione
          alias. lore Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Minus quia atque cumque, explicabo sed earum, praesentium aperiam sunt
          quam cum eos ipsa excepturi doloremque qui mollitia porro amet ratione
          alias. lore
        </StyledText>
      </StyledView>
    </StyledView>
  )
}
