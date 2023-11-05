import { NavigationContainer } from '@react-navigation/native'
import { AuthRouter } from './auth-routes'
import { AppRouter } from './app-routes'

import Toast from 'react-native-toast-message'

export function Routes() {
  return (
    <>
      <NavigationContainer>
        <AuthRouter />
        {/* <AppRouter /> */}
      </NavigationContainer>
      <Toast />
    </>
  )
}
