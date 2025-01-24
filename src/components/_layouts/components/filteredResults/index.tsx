import React from 'react'
import styled from 'styled-components'

const FilteredContainer = styled.div`
  padding: 16px;
  background: #f9f9f9;
  border-radius: 8px;
  overflow-y: auto;
  max-height: calc(100vh - 100px); /* Adjust for sidebar height */
`

const TabTitle = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin: 16px 0 8px;
  color: #015d7f;
`

const FilteredItem = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
  padding: 8px 12px;
  border-radius: 4px;
  background: #ffffff;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #015d7f;
    color: #ffffff;

    a {
      color: #ffffff;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
    margin-left: 8px;
  }
`

interface FilteredResultsProps {
  filteredItems: typeof allMenuItems
  onItemClick: (path: string) => void
}

const FilteredResults: React.FC<FilteredResultsProps> = ({
  filteredItems,
  onItemClick,
}) => {
  return (
    <FilteredContainer>
      {filteredItems.map((item) => (
        <div key={item.key}>
          <TabTitle>{item.label}</TabTitle>
          {item.children?.map((child) => (
            <FilteredItem
              key={child.key}
              onClick={() => onItemClick(child.path ?? '#')}
            >
              <a href={child.path}>{child.label}</a>
            </FilteredItem>
          ))}
        </div>
      ))}
    </FilteredContainer>
  )
}

export default FilteredResults
