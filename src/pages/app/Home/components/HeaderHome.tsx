import { TouchableOpacity, View } from 'react-native'

import { SignOut } from 'phosphor-react-native'

import { AvatarHome } from './AvatarHome'
import { WelcomeHome } from './WelcomeHome'

import { styled } from 'nativewind'

const StyledView = styled(View)
const StyledSignOut = styled(SignOut)

export function HeaderHome() {
  return (
    <StyledView className="bg-yellow-500 pt-12 pb-4 px-4 flex-row items-center">
      <AvatarHome first="E" second="B" />

      <WelcomeHome name="Emanuel Bacalhau" />

      <TouchableOpacity>
        <StyledSignOut className="text-gray-200" size={32} />
      </TouchableOpacity>
    </StyledView>
  )
}
