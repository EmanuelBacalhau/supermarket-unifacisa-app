import { useState } from 'react'

import { Text, View } from 'react-native'

import Animated, { Easing, FadeInLeft } from 'react-native-reanimated'

import { InputUI } from '../../../../../components/ui/InputUI'
import { ButtonUI } from '../../../../../components/ui/ButtonUI'

import { styled } from 'nativewind'

const StyledView = styled(View)
const StyledText = styled(Text)

const StyledAnimatedView = styled(Animated.View)

export function FormSignUp() {
  const [name, setName] = useState('')
  const [birthday, setBirthday] = useState('')
  const [cpf, setCpf] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <StyledAnimatedView
      className="items-center"
      entering={FadeInLeft.duration(1000).easing(Easing.linear)}
    >
      <StyledView className="w-[90%] gap-y-2">
        <StyledText className="text-center uppercase text-3xl font-bold text-white mb-4">
          Access account
        </StyledText>

        <InputUI onChangeText={setName} placeholder="Type your name" />

        <InputUI
          onChangeText={setBirthday}
          placeholder="Type your birthday"
          mask="99/99/9999"
          keyboardType="numeric"
        />

        <InputUI
          onChangeText={setCpf}
          placeholder="Type your cpf"
          mask="999.999.999-99"
          keyboardType="numeric"
        />

        <InputUI
          onChangeText={setEmail}
          placeholder="Type your email"
          keyboardType="email-address"
        />

        <InputUI
          onChangeText={setPassword}
          placeholder="Type your password"
          secureTextEntry
        />

        <ButtonUI title="Register" />
      </StyledView>
    </StyledAnimatedView>
  )
}
