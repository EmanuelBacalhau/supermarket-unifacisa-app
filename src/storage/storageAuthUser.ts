import AsyncStorage from '@react-native-async-storage/async-storage'
import { SECRET_USER } from './storageConfig'
import { UserDto } from '../dtos/UserDto'

export async function saveUserInStorage(data: UserDto) {
  await AsyncStorage.setItem(SECRET_USER, JSON.stringify(data))
}

export async function getUserInStorage() {
  return await AsyncStorage.getItem(SECRET_USER)
}

export async function removeUserInStorage() {
  await AsyncStorage.removeItem(SECRET_USER)
}
