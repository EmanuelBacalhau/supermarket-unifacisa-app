import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'

import { SignIn } from '../pages/auth/SignIn'

type AuthRouter = {
  signIn: undefined
  signUp: undefined
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRouter>

const { Navigator, Screen } = createNativeStackNavigator<AuthRouter>()

export function AuthRouter() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="signIn" component={SignIn} />
    </Navigator>
  )
}
