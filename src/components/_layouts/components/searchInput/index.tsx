import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import React from 'react'
import styled from 'styled-components'

import IconEnum from '@/enums/icon/iconEnum'
import IconsHelper from '@/utils/icons'

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    width: 20px !important;
    height: 20px !important;
  }

  path {
    fill: #015d7f !important;
  }
`

interface SearchBarProps {
  onFilter: (query: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ onFilter }) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.trim().toLowerCase()
    onFilter(query)
  }

  return (
    <Input
      placeholder="  "
      onChange={handleSearch}
      style={{ backgroundColor: '#DEE2E6' }}
      allowClear
      prefix={
        <IconContainer>
          {IconsHelper.getIcon(IconEnum.SearchIcon)}
        </IconContainer>
      }
    />
  )
}

export default SearchBar
