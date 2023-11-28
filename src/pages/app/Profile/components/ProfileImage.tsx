import * as FileSystem from 'expo-file-system'
import * as ImagePicker from 'expo-image-picker'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styled } from 'nativewind'
import { useAuth } from '../../../../hooks/useAuth'
import { api } from '../../../../services/api'
import { saveUserInStorage } from '../../../../storage/storageAuthUser'
import { Dispatch, SetStateAction } from 'react'
import { Upload } from 'phosphor-react-native'

const StyledView = styled(View)
const StyledUpload = styled(Upload)
const StyledImage = styled(Image)
const StyledTouchableOpacity = styled(TouchableOpacity)

type Props = {
  setLoadingPage: Dispatch<SetStateAction<boolean>>
}

export function ProfileImage({ setLoadingPage }: Props) {
  const { user } = useAuth()

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      aspect: [4, 4],
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
    })

    if (!result.canceled) {
      setLoadingPage(true)
      const photo = await FileSystem.getInfoAsync(result.assets[0].uri)
      if (photo.exists) {
        const fileExtension = result.assets[0].uri.split('.').pop()
        const photoFile = {
          name: `${user.name}.${fileExtension}`.toLowerCase(),
          uri: photo.uri,
          type: `${result.assets[0].type}/${fileExtension}`,
        } as any

        const data = new FormData()

        data.append('avatar', photoFile)

        const response = await api.patch('/clients/avatar', data)

        const newDataUser = user
        newDataUser.avatar = response.data
        saveUserInStorage(newDataUser)
        setLoadingPage(false)
      }
      setLoadingPage(false)
    }
  }

  return (
    <StyledTouchableOpacity
      onPress={pickImage}
      className="items-center mb-5 justify-center"
    >
      <StyledImage
        source={{
          uri: user.avatar,
        }}
        alt="avatar"
        className="rounded-full w-36 h-36 bg-gray-400/60"
      />
      <StyledUpload className="absolute text-gray-400/60" />
    </StyledTouchableOpacity>
  )
}
