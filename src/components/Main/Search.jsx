import React, { useState } from 'react'

import { CustomButton } from '../Button'
import { CustomInput } from '../Input'

import { SearchContainer } from '../../styles/SearchStyles'

export const Search = ({ onSearch }) => {
  const [search, setSearch] = useState('')

  const handleSearchKeyPress = e => {
    if (e.charCode === 13) {
      onSearch(search)
    }
  }

  return (
    <SearchContainer>
      <CustomInput
        placeholder='enter a search phrase'
        value={search}
        onChange={e => setSearch(e.target.value)}
        onKeyPress={handleSearchKeyPress}
      />
      <CustomButton label='Search' onClick={() => onSearch(search)} />
    </SearchContainer>
  )
}
