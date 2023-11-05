import { Text, View } from 'react-native'

import { FormSignUp } from './components/FormSignUp'
import { AuthHeader } from '../../../components/auth/AuthHeader'
import { AuthHandlePage } from '../../../components/auth/AuthHandlePage'
import { AuthBackground } from '../../../components/auth/AuthBackground'

import { styled } from 'nativewind'

const StyledView = styled(View)
const StyledText = styled(Text)

export function SignUp() {
  return (
    <StyledView className="py-12 flex-1 justify-between">
      <AuthBackground />

      <AuthHeader />

      <StyledText className="text-center uppercase text-3xl font-bold text-white">
        Register
      </StyledText>

      <FormSignUp />

      <AuthHandlePage
        page={'signIn'}
        titleButton="Access"
        content="Already have an account?"
      />
    </StyledView>
  )
}
