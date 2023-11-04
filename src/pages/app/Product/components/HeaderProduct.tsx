import { Pressable, PressableProps } from 'react-native'
import { ArrowLeft } from 'phosphor-react-native'

import { styled } from 'nativewind'

const StyledPressable = styled(Pressable)
const StyledArrowArcLeft = styled(ArrowLeft)

type Props = PressableProps

export function HeaderProduct({ ...props }: Props) {
  return (
    <StyledPressable {...props} className="bg-yellow-500 pt-12 pb-4 px-4">
      <StyledArrowArcLeft size={25} weight="bold" />
    </StyledPressable>
  )
}
