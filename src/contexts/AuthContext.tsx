import { ReactNode, createContext, useEffect, useState } from 'react'

import {
  getTokenInStorage,
  removeTokenInStorage,
  saveTokenInStorage,
} from '../storage/storageAuthToken'

import { api } from '../services/api'

import { UserDto } from '../dtos/UserDto'
import { UserSignUpDto } from '../dtos/UserSignUpDto'

import { AppError } from '../utils/AppError'

import Toast from 'react-native-toast-message'
import { UserSignInDto } from '../dtos/UserSignInDto'
import axios from 'axios'
import {
  getUserInStorage,
  removeUserInStorage,
  saveUserInStorage,
} from '../storage/storageAuthUser'

export type AuthContextDataProps = {
  user: UserDto
  signIn: (data: UserSignInDto) => Promise<void>
  signUp: (data: UserSignUpDto) => Promise<void>
  signOut: () => Promise<void>
  isAuthenticated: boolean
}

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps,
)

type AuthContextProviderProps = {
  children: ReactNode
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<UserDto>({
    id: '',
    email: '',
    name: '',
  })

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  async function verifyTokenAndUserData() {
    const token = await getTokenInStorage()

    const userData = await getUserInStorage()

    if (userData) {
      setUser(JSON.parse(userData))
    }

    setIsAuthenticated(!!token)
  }

  useEffect(() => {
    verifyTokenAndUserData()
  }, [])

  const signIn = async (userData: UserSignInDto) => {
    try {
      const { data } = await api.post('/auth/clients', userData)

      api.defaults.headers.common.Authorization = `Bearer ${data.token}`

      setUser(data.client)

      await saveUserInStorage(user)
      await saveTokenInStorage(data.token)

      setIsAuthenticated(!!(await getTokenInStorage()))
    } catch (error) {
      const isAppError = error instanceof AppError

      const message = isAppError ? error.message : 'Internal server error'

      Toast.show({
        type: 'error',
        text1: message,
        position: 'top',
        topOffset: 60,
      })
    }
  }

  const signUp = async (data: UserSignUpDto) => {
    try {
      await api.post('/clients/register', {
        name: data.name,
        birthday: data.birthday,
        cpf: data.cpf,
        email: data.email,
        password: data.password,
      })

      await signIn({ email: data.email, password: data.password })
    } catch (error) {
      const isAppError = error instanceof AppError
      const message = isAppError ? error.message : 'Internal server error'

      Toast.show({
        type: 'error',
        position: 'top',
        text1: message,
        topOffset: 60,
      })
    }
  }

  const signOut = async () => {
    await removeTokenInStorage()
    await removeUserInStorage()

    verifyTokenAndUserData()
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signUp,
        signOut,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
