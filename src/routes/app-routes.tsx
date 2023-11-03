import { Platform, useColorScheme } from 'react-native'

import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs'

import { House, ShoppingCart, UserCircle } from 'phosphor-react-native'

import { Home } from '../pages/app/Home'
import { Cart } from '../pages/app/Cart'
import { Profile } from '../pages/app/Profile'

type AppRoutes = {
  home: undefined
  cart: undefined
  profile: undefined
}

export type AppNavigatorRoutesProp = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

export function AppRouter() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: {
          backgroundColor: 'yellow',
          borderTopWidth: 0,
          height: Platform.OS === 'android' ? 'auto' : 96,
          paddingBottom: 30,
          paddingTop: 30,
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => {
            return <House color={color} weight="fill" size={30} />
          },
        }}
      />
      <Screen
        name="cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color }) => {
            return <ShoppingCart color={color} weight="fill" size={30} />
          },
        }}
      />
      <Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => {
            return <UserCircle color={color} weight="fill" size={30} />
          },
        }}
      />
    </Navigator>
  )
}
