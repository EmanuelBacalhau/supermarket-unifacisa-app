import { useState } from 'react'

import { ScrollView, Text, View } from 'react-native'

import { styled } from 'nativewind'
import { InputUI } from '../../../components/ui/InputUI'
import { ButtonUI } from '../../../components/ui/ButtonUI'
import { ProfileImage } from './components/ProfileImage'
import { HeaderProfile } from './components/HeaderProfile'

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledScrollView = styled(ScrollView)

export function Profile() {
  const [name, setName] = useState('Emanuel Bacalhau')
  const [email] = useState('carlosemanuelbatistabacalhau@gmail.com')
  const [oldPassword, setOldPassword] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleUpdate = () => {
    console.log(name)
  }

  return (
    <StyledView className="flex-1">
      <HeaderProfile />

      <StyledView className="flex-1 items-center mt-4 px-4">
        <ProfileImage one={name[0]} two={name[1]} />

        <StyledScrollView
          showsVerticalScrollIndicator={false}
          className="w-full mt-5"
        >
          <StyledView className="gap-y-2">
            <InputUI
              onChangeText={(text, rawText) => {
                setName(rawText)
              }}
              value={name}
            />

            <InputUI onChangeText={() => {}} value={email} editable={false} />

            <StyledText className="text-lg text-gray-700 font-semibold">
              Change password
            </StyledText>

            <InputUI
              value={oldPassword}
              placeholder="Old password"
              onChangeText={(text, rawText) => setOldPassword(rawText)}
              secureTextEntry
            />
            <InputUI
              value={password}
              placeholder="Password"
              onChangeText={(text, rawText) => setPassword(rawText)}
              secureTextEntry
            />
            <InputUI
              value={confirmPassword}
              placeholder="Confirm password"
              onChangeText={(text, rawText) => setConfirmPassword(rawText)}
              secureTextEntry
            />

            <ButtonUI title="update" onPress={handleUpdate} />
          </StyledView>
        </StyledScrollView>
      </StyledView>
    </StyledView>
  )
}
