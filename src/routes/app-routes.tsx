import { Platform } from 'react-native'

import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs'

import { House, ShoppingCart, UserCircle } from 'phosphor-react-native'

import { Home } from '../pages/app/Home'
import { Cart } from '../pages/app/Cart'
import { Profile } from '../pages/app/Profile'
import { Product } from '../pages/app/Product'

type AppRoutes = {
  home: undefined
  cart: undefined
  profile: undefined
  product: { productId: string }
}

export type AppNavigatorRoutesProp = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

export function AppRouter() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'rgb(249 115 22)',
        tabBarInactiveTintColor: 'rgb(229 231 235)',
        tabBarStyle: {
          backgroundColor: 'rgb(234 179 8)',
          borderTopWidth: 0,
          height: Platform.OS === 'android' ? 'auto' : 96,
          paddingBottom: 30,
          paddingTop: 30,
        },
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
      <Screen
        name="product"
        component={Product}
        options={{
          tabBarButton: () => null,
        }}
      />
    </Navigator>
  )
}
