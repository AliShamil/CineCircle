import React from 'react'
import { StyledText, StyledView } from '../common/components/StyledComponents'
import { useAuthStore } from '../common/hooks/useAuthStore'
import { useStore } from 'zustand'
const Search = () => {
  const {username} = useStore(useAuthStore)
  console.log(username)
  return (
    <StyledView>
        <StyledText>Search</StyledText>
    </StyledView>
  )
}

export default Search