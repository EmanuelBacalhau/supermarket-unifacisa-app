import { TouchableOpacity, View } from 'react-native'

import { SignOut } from 'phosphor-react-native'

import { AvatarHome } from './AvatarHome'
import { WelcomeHome } from './WelcomeHome'
import { UserDto } from '../../../../dtos/UserDto'

import { styled } from 'nativewind'

const StyledView = styled(View)
const StyledSignOut = styled(SignOut)

type Props = {
  user: UserDto
  signOut: () => Promise<void>
}

export function HeaderHome({ user, signOut }: Props) {
  return (
    <StyledView className="bg-yellow-500 pt-12 pb-4 px-4 flex-row items-center">
      <AvatarHome first={user.name[0]} second={user.name[1]} />

      <WelcomeHome name={user.name} />

      <TouchableOpacity onPress={signOut}>
        <StyledSignOut className="text-gray-200" size={32} weight="bold" />
      </TouchableOpacity>
    </StyledView>
  )
}
