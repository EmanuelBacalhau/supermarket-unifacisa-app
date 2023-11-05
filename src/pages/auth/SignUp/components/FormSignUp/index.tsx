import { Controller, useForm } from 'react-hook-form'

import { AppError } from '../../../../../utils/AppError'

import { yupResolver } from '@hookform/resolvers/yup'

import { Text, View } from 'react-native'

import Animated, { Easing, FadeInLeft } from 'react-native-reanimated'

import { InputUI } from '../../../../../components/ui/InputUI'
import { ButtonUI } from '../../../../../components/ui/ButtonUI'

import * as yup from 'yup'

import { styled } from 'nativewind'
import { Masks } from 'react-native-mask-input'
import { api } from '../../../../../services/api'

import Toast from 'react-native-toast-message'
import { useNavigation } from '@react-navigation/native'
import { AuthNavigatorRoutesProps } from '../../../../../routes/auth-routes'
import { useState } from 'react'

const StyledView = styled(View)

const StyledAnimatedView = styled(Animated.View)

const schema = yup.object({
  name: yup.string().required('Name is required'),
  birthday: yup.string().required('Birthday is required'),
  cpf: yup.string().required('Cpf is required'),
  email: yup
    .string()
    .email('Must be a email valid')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must have at least 8 characters')
    .required('Password is required'),
})

type FormData = {
  name: string
  birthday: string
  cpf: string
  email: string
  password: string
}

export function FormSignUp() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const [loading, setLoading] = useState(false)

  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  async function handleSignUp({
    name,
    birthday,
    cpf,
    email,
    password,
  }: FormData) {
    try {
      setLoading(true)
      await api.post('/clients/register', {
        name,
        birthday,
        cpf,
        email,
        password,
      })

      setLoading(false)
      navigation.replace('signIn')
    } catch (error) {
      setLoading(true)
      const isAppError = error instanceof AppError
      const message = isAppError ? error.message : 'Internal server error'

      if (isAppError) {
        setLoading(false)
        return Toast.show({
          type: 'error',
          position: 'top',
          text1: message,
          topOffset: 60,
        })
      }
      setLoading(false)
    }
  }

  return (
    <StyledAnimatedView
      className="items-center"
      entering={FadeInLeft.duration(1000).easing(Easing.linear)}
    >
      <StyledView className="w-[90%]" style={{ gap: 8 }}>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, onBlur, value } }) => {
            return (
              <InputUI
                onBlur={onBlur}
                onChangeText={onChange}
                placeholder="Type your name"
                value={value}
                messageError={errors.name?.message}
              />
            )
          }}
        />

        <Controller
          control={control}
          name="birthday"
          render={({ field: { onChange, value, onBlur } }) => {
            return (
              <InputUI
                value={value}
                onBlur={onBlur}
                mask={Masks.DATE_YYYYMMDD}
                onChangeText={onChange}
                placeholder="Type your birthday (YYYY/MM/DD)"
                keyboardType="numeric"
                messageError={errors.birthday?.message}
              />
            )
          }}
        />

        <Controller
          control={control}
          name="cpf"
          render={({ field: { onChange, onBlur, value } }) => {
            return (
              <InputUI
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                mask={Masks.BRL_CPF}
                placeholder="Type your cpf"
                keyboardType="numeric"
                messageError={errors.cpf?.message}
              />
            )
          }}
        />

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value, onBlur } }) => {
            return (
              <InputUI
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                placeholder="Type your email"
                keyboardType="email-address"
                messageError={errors.email?.message}
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
                onBlur={onBlur}
                onChangeText={onChange}
                placeholder="Type your password"
                secureTextEntry
                onSubmitEditing={handleSubmit(handleSignUp)}
                returnKeyType="send"
                messageError={errors.password?.message}
              />
            )
          }}
        />

        <ButtonUI
          title="Register"
          loading={loading}
          onPress={handleSubmit(handleSignUp)}
        />
      </StyledView>
    </StyledAnimatedView>
  )
}
