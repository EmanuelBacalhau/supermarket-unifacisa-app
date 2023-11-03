import { NavigationContainer } from '@react-navigation/native'
import { AuthRouter } from './auth-routes'
import { AppRouter } from './app-routes'

export function Routes() {
  return (
    <NavigationContainer>
      {/* <AuthRouter /> */}
      <AppRouter />
    </NavigationContainer>
  )
}
