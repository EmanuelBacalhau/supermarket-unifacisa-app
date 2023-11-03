import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { styled } from 'nativewind'

const StyledText = styled(Text)
const StyledTouchableOpacity = styled(TouchableOpacity)

interface Props extends TouchableOpacityProps {
  title: string
  type?: 'primary' | 'outline'
}

export function ButtonUI({ title, type = 'primary', ...props }: Props) {
  const styleButtonPrimary = 'p-3 bg-yellow-500 w-full rounded-md'
  const styleButtonOutline = 'p-3 border border-yellow-500 rounded-md'

  const styleButton =
    type === 'primary' ? styleButtonPrimary : styleButtonOutline

  return (
    <StyledTouchableOpacity {...props} className={styleButton}>
      <StyledText className="text-lg text-white uppercase font-bold text-center">
        {title}
      </StyledText>
    </StyledTouchableOpacity>
  )
}
