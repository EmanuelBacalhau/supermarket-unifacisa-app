import { useAuth } from '../hooks/useAuth'

import { NavigationContainer } from '@react-navigation/native'
import { AuthRouter } from './auth-routes'
import { AppRouter } from './app-routes'

import Toast from 'react-native-toast-message'
import { View } from 'react-native'

export function Routes() {
  const { isAuthenticated } = useAuth()

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        {isAuthenticated ? <AppRouter /> : <AuthRouter />}
      </NavigationContainer>
      <Toast />
    </View>
  )
}
