import { ScrollView, Text, View } from 'react-native'

import * as yup from 'yup'

import { yupResolver } from '@hookform/resolvers/yup'

import { InputUI } from '../../../components/ui/InputUI'
import { ButtonUI } from '../../../components/ui/ButtonUI'
import { ProfileImage } from './components/ProfileImage'
import { HeaderProfile } from './components/HeaderProfile'
import { Controller, useForm } from 'react-hook-form'

import { styled } from 'nativewind'
import { useAuth } from '../../../hooks/useAuth'
import { api } from '../../../services/api'

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledScrollView = styled(ScrollView)

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .required('Email is required')
    .email('Must be a email valid'),
  oldPassword: yup
    .string()
    .min(8, 'Password must have at least 8 characters')
    .required('Old password is required'),
  password: yup
    .string()
    .min(8, 'Password must have at least 8 characters')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .min(8, 'Password must have at least 8 characters')
    .required('Confirm password is required')
    .oneOf([yup.ref('password')], 'Passwords not the same'),
})

type FormData = {
  name: string
  email: string
  oldPassword: string
  password: string
  confirmPassword: string
}

export function Profile() {
  const { user } = useAuth()

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormData>({
    defaultValues: {
      name: user.name,
      email: user.email,
    },
    resolver: yupResolver(schema),
  })

  const handleUpdate = async (data: FormData) => {
    console.log((await api.get('/clients/details')).data)
  }

  return (
    <StyledView className="flex-1">
      <HeaderProfile />

      <StyledView className="flex-1 items-center mt-4 px-4">
        <ProfileImage one={getValues().name[0]} two={getValues().name[1]} />

        <StyledScrollView
          showsVerticalScrollIndicator={false}
          className="w-full mt-5"
        >
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

            <ButtonUI title="update" onPress={handleSubmit(handleUpdate)} />
          </StyledView>
        </StyledScrollView>
      </StyledView>
    </StyledView>
  )
}
