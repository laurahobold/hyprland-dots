// src/components/_layouts/components/sidebar/index.tsx

import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import FilteredResults from '@/components/_layouts/components/filteredResults'
import SearchBar from '@/components/_layouts/components/searchInput'
import { menuItems as allMenuItems } from '@/components/_layouts/partials/menuItems'
import { useAuthStore } from '@/contexts/useAuthStore'
import IconEnum from '@/enums/icon/iconEnum'
import IconsHelper from '@/utils/icons'

import {
  IconWrapper,
  MenuContainer,
  MenuItem,
  MenuItemBG,
  SearchContainer,
  SearchIconContainer,
  SidebarContainer,
  SubMenuItem,
  SubMenuItemBG,
  SubMenuSidebar,
  ToggleButton,
} from './styles.module'

interface SidebarProps {
  collapsed: boolean
  onCollapse: (collapsed: boolean) => void
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, onCollapse }) => {
  const { canViewTab, canViewPage } = useAuthStore()
  const location = useLocation()
  const navigate = useNavigate()

  const [filteredMenuItems, setFilteredMenuItems] = useState(allMenuItems)
  const [isFiltered, setIsFiltered] = useState(false)
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)
  const [submenuTop, setSubmenuTop] = useState<number>(0)
  const isPathActive = (path: string) => location.pathname === path

  const isParentActive = (children: MenuItem['children']) => {
    if (!children) return false
    return children.some((child) => isPathActive(child.path || ''))
  }

  const handleSearch = (query: string) => {
    if (!query) {
      setFilteredMenuItems(allMenuItems)
      setIsFiltered(false)
      return
    }

    const filtered = allMenuItems
      .map((item) => {
        const matchingChildren = item.children?.filter((child) =>
          child.label.toLowerCase().includes(query.toLowerCase()),
        )
        if (
          item.label.toLowerCase().includes(query.toLowerCase()) ||
          matchingChildren?.length
        ) {
          return {
            ...item,
            children: matchingChildren || [],
          }
        }
        return null
      })
      .filter(Boolean) as typeof allMenuItems

    setFilteredMenuItems(filtered)
    setIsFiltered(true)
  }

  const handleItemClick = (path: string) => {
    navigate(path)
    setIsFiltered(false)
  }
  const handleMouseEnter = (key: string, event: React.MouseEvent) => {
    setHoveredMenu(key)

    // Get the position of the hovered menu item
    const boundingRect = (event.target as HTMLElement).getBoundingClientRect()
    setSubmenuTop(boundingRect.top)
  }
  const handleMouseLeave = () => {
    setHoveredMenu(null)
  }
  const renderMenuItems = (items: typeof allMenuItems) =>
    items.map((item) => {
      if (!canViewTab(item.tabPermission)) return null

      const hasChildren = item.children && item.children.length > 0
      const isActive =
        isPathActive(item.path || '') || isParentActive(item.children)

      return (
        <MenuItem
          key={item.key}
          collapsed={collapsed}
          className={isActive ? 'active' : ''}
          onMouseEnter={(event) => handleMouseEnter(item.key, event)}
          onMouseLeave={handleMouseLeave}
        >
          <MenuItemBG
            onClick={() => !hasChildren && handleItemClick(item.path || '#')}
            className={isActive ? 'active' : ''}
          >
            <div className="menu-item-content">
              <IconWrapper isActive={isActive}>
                {item.icon && IconsHelper.getIcon(item.icon)}
              </IconWrapper>
              {!collapsed && <span>{item.label}</span>}
            </div>
          </MenuItemBG>
        </MenuItem>
      )
    })

  const renderSubMenu = () => {
    const activeItem = allMenuItems.find((item) => item.key === hoveredMenu)
    if (!activeItem?.children) return null

    return (
      <SubMenuSidebar
        className="submenu-sidebar"
        collapsed={collapsed}
        top={submenuTop}
        onMouseEnter={() => setHoveredMenu(activeItem.key)} // Keep it open
        onMouseLeave={() => setHoveredMenu(null)} // Close on mouse leave
      >
        {activeItem.children.map((child) => {
          const isActive = isPathActive(child.path || '')

          return (
            <SubMenuItem
              key={child.key}
              className={`menu-item-content ${isActive ? 'active' : ''}`}
              onClick={() => handleItemClick(child.path || '#')}
            >
              <SubMenuItemBG className={isActive ? 'active' : ''}>
                {child.label}
              </SubMenuItemBG>
            </SubMenuItem>
          )
        })}
      </SubMenuSidebar>
    )
  }

  // @ts-ignore
  return (
    <>
      <SidebarContainer collapsed={collapsed}>
        {collapsed ? (
          <IconWrapper isActive={false}>
            <SearchIconContainer onClick={() => onCollapse(false)}>
              {IconsHelper.getIcon(IconEnum.SearchIcon)}
            </SearchIconContainer>
          </IconWrapper>
        ) : (
          <SearchContainer>
            <SearchBar onFilter={handleSearch} />
          </SearchContainer>
        )}

        {isFiltered ? (
          <FilteredResults
            filteredItems={filteredMenuItems}
            onItemClick={(path) => navigate(path)}
          />
        ) : (
          <MenuContainer>{renderMenuItems(filteredMenuItems)}</MenuContainer>
        )}

        <ToggleButton
          onClick={() => onCollapse(!collapsed)}
          collapsed={collapsed}
        >
          {IconsHelper.getIcon(IconEnum.SidebarToggle)}
        </ToggleButton>
      </SidebarContainer>

      {/* Render Submenu */}
      {hoveredMenu && renderSubMenu()}
    </>
  )
}

export default Sidebar
