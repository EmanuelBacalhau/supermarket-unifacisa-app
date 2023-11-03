import { MaskedTextInput, MaskedTextInputProps } from 'react-native-mask-text'

import { styled } from 'nativewind'

const StyledMaskedTextInput = styled(MaskedTextInput)

type Props = MaskedTextInputProps

export function InputUI({ ...props }: Props) {
  return (
    <StyledMaskedTextInput
      {...props}
      className="w-full bg-gray-300/90 p-3 rounded-md px-2 text-lg"
    />
  )
}
