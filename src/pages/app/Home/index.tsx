import { View } from 'react-native'

import { styled } from 'nativewind'
import { HeaderHome } from './components/HeaderHome'

const StyledView = styled(View)

export function Home() {
  return (
    <StyledView className="flex-1">
      <HeaderHome />
    </StyledView>
  )
}
