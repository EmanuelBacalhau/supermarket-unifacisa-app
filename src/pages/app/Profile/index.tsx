import { useState } from 'react'
import { api } from '../../../services/api'
import { useAuth } from '../../../hooks/useAuth'

import { Controller, useForm } from 'react-hook-form'

import { ScrollView, Text, View } from 'react-native'

import Toast from 'react-native-toast-message'

import { InputUI } from '../../../components/ui/InputUI'
import { ButtonUI } from '../../../components/ui/ButtonUI'
import { ProfileImage } from './components/ProfileImage'
import { HeaderProfile } from './components/HeaderProfile'
import { UserDto } from '../../../dtos/UserDto'
import { AppError } from '../../../utils/AppError'

import { styled } from 'nativewind'
import { Spinner } from 'phosphor-react-native'

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledScrollView = styled(ScrollView)

type FormData = {
  name: string
  email: string
  oldPassword: string
  password: string
  confirmPassword: string
}

export function Profile() {
  const [loading, setLoading] = useState<boolean>(false)
  const [, setLoadingPage] = useState<boolean>(false)

  const { user, updateUserStorage, signOut } = useAuth()

  const {
    control,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm<FormData>({
    defaultValues: {
      name: user.name,
      email: user.email,
    },
  })

  async function handleUpdate(data: FormData) {
    try {
      setLoading(true)
      const userUpdated = user

      userUpdated.name = data.name

      await api.put<UserDto>(`/clients/${user.id}`, data)

      await updateUserStorage(userUpdated)

      setLoading(false)
      resetField('name')
      resetField('confirmPassword')
      resetField('password')
      resetField('oldPassword')
    } catch (error) {
      setLoading(false)
      const isAppError = error instanceof AppError

      const message = isAppError ? error.message : 'Internal server error'

      Toast.show({
        text1: message,
        position: 'top',
        topOffset: 60,
        type: 'error',
      })
    }
  }

  return (
    <StyledView className="flex-1">
      <HeaderProfile />

      <StyledView className="flex-1 mt-4 px-4 items-center">
        <StyledScrollView
          className="flex-1 my-2 w-full"
          showsVerticalScrollIndicator={false}
        >
          <ProfileImage setLoadingPage={setLoadingPage} />

          <StyledView style={{ gap: 8 }}>
            <Controller
              control={control}
              name="name"
              render={({ field: { onBlur, onChange, value } }) => {
                return (
                  <InputUI
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    messageError={errors.name?.message}
                  />
                )
              }}
            />

            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => {
                return (
                  <InputUI
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    editable={false}
                    messageError={errors.email?.message}
                  />
                )
              }}
            />

            <StyledText className="text-lg text-gray-700 font-semibold">
              Change password
            </StyledText>

            <Controller
              control={control}
              name="oldPassword"
              render={({ field: { onBlur, onChange, value } }) => {
                return (
                  <InputUI
                    value={value}
                    onBlur={onBlur}
                    placeholder="Old password"
                    onChangeText={onChange}
                    secureTextEntry
                    messageError={errors.oldPassword?.message}
                  />
                )
              }}
            />

            <Controller
              control={control}
              name="password"
              render={({ field: { value, onBlur, onChange } }) => {
                return (
                  <InputUI
                    value={value}
                    placeholder="Password"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    secureTextEntry
                    messageError={errors.password?.message}
                  />
                )
              }}
            />

            <Controller
              control={control}
              name="confirmPassword"
              render={({ field: { value, onBlur, onChange } }) => {
                return (
                  <InputUI
                    value={value}
                    onBlur={onBlur}
                    placeholder="Confirm password"
                    onChangeText={onChange}
                    secureTextEntry
                    onSubmitEditing={handleSubmit(handleUpdate)}
                    returnKeyType="send"
                    messageError={errors.confirmPassword?.message}
                  />
                )
              }}
            />

            <ButtonUI
              title="update"
              onPress={handleSubmit(handleUpdate)}
              loading={loading}
            />
            <ButtonUI title="exit" onPress={signOut} />
          </StyledView>
        </StyledScrollView>
      </StyledView>
    </StyledView>
  )
}
