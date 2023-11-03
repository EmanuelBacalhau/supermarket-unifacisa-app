import { View } from 'react-native'

import { styled } from 'nativewind'

import { FormSignIn } from './components/FormSignIn'
import { AuthHeader } from '../../../components/auth/AuthHeader'
import { AuthHandlePage } from '../../../components/auth/AuthHandlePage'
import { AuthBackground } from '../../../components/auth/AuthBackground'

const StyledView = styled(View)

export function SignIn() {
  return (
    <StyledView className="py-12 flex-1 justify-between">
      <AuthBackground />

      <AuthHeader />

      <FormSignIn />

      <AuthHandlePage />
    </StyledView>
  )
}
