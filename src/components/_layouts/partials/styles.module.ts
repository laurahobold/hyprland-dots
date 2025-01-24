import { Icon as Iconify } from '@iconify/react'
import styled from 'styled-components'

export const colors = {
  primary: '#015d7f',
  menuBg: '#eeeeee',
  menuHover: '#015d7f',
  searchBg: '#DEE2E6',
  popupBg: '#D9D9D9',
  itemTextSize: '16px',
  itemTextWeight: 400,
}

export const SidebarContainer = styled.div<{ collapsed: boolean }>`
  width: ${({ collapsed }) => (collapsed ? '80px' : '250px')};
  //min-width: 200px;
  background-color: ${colors.menuBg};
  height: calc(100vh - 84px);
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 84px;
  border-radius: 0px 8px 8px 0px;
  transition: width 0.3s;
  overflow: hidden; /* Prevent overflow within the sidebar itself */
  box-shadow: rgba(0, 0, 0, 0.38) 4px 0px 8px;
`

export const MenuContainer = styled.nav`
  flex: 1;
`

export const MenuItem = styled.div<{ collapsed?: boolean }>`
  position: relative; /* Allows submenu to position absolutely */
  display: flex;
  align-items: center;
  color: ${colors.primary};
  cursor: pointer;
  transition: background-color 0.2s;
  border-radius: 0px 4px 4px 0px;
  font-size: ${colors.itemTextSize};
  font-weight: ${colors.itemTextWeight};

  .menu-item-content {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: ${({ collapsed }) => (collapsed ? 'center' : 'start')};

    span {
      margin-left: ${({ collapsed }) => (collapsed ? '0' : '10px')};
      display: ${({ collapsed }) => (collapsed ? 'none' : 'flex')};
    }
  }

  .submenu-sidebar {
    display: block;
  }
`
export const MenuItemBG = styled.div<{ collapsed?: boolean }>`
  padding: 10px 20px;
  width: 100%;
  align-items: center;
  color: ${colors.primary};
  cursor: pointer;
  transition: background-color 0.2s;
  border-radius: 0px 4px 4px 0px;
  font-size: ${colors.itemTextSize};
  font-weight: ${colors.itemTextWeight};
  margin: 2px 10px 2px 0;

  :hover {
    path {
      stroke: #ffffff;
    }
  }

  &.active {
    background-color: ${colors.menuHover};
    color: #fff;
    font-weight: 600;
  }

  :hover {
    background-color: ${colors.menuHover} !important;
    color: #fff;
    font-weight: 600;
  }
`
export const SubMenuItemBG = styled.div<{ collapsed?: boolean }>`
  padding: 10px;
  width: 100%;
  align-items: center;
  color: ${colors.primary};
  cursor: pointer;
  transition: background-color 0.2s;
  border-radius: 4px;
  font-size: ${colors.itemTextSize};
  font-weight: ${colors.itemTextWeight};

  &.active {
    background-color: ${colors.menuHover};
    color: #fff;
    font-weight: 600;
  }

  :hover {
    background-color: ${colors.menuHover} !important;
    color: #fff;
    font-weight: 600;
  }
`

// export const SubMenuSidebar = styled.div<{ collapsed: boolean }>`
//   position: fixed;
//   //top: 80px; /* Always spawn at the top */
//   left: ${({ collapsed }) =>
//     collapsed ? '80px' : '250px'}; /* Adjust dynamically */
//   height: fit-content; /* Full height */
//   width: 250px; /* Fixed width for the submenu */
//   background-color: #d9d9d9;
//   //border-left: 1px solid #ddd;
//   padding: 60px 0 60px 0;
//   box-shadow: rgba(0, 0, 0, 0.2) 4px 0px 8px,
//     /* Regular shadow */ inset rgba(0, 0, 0, 0.2) 4px 1px 8px; /* Inset shadow */
//   border-radius: 0px 8px 8px 0px;
//
//   z-index: 999;
//   overflow-y: hidden; /* Enable scrolling for long menus */
//
//   //.menu-item-content {
//   //  color: #333;
//   //  transition: background-color 0.2s;
//   //  padding: 10px 15px;
//   //
//   //  &:active {
//   //    background-color: #007bff;
//   //    color: #fff;
//   //  }
//   //
//   //  &:hover {
//   //    background-color: #007bff;
//   //    color: #fff;
//   //  }
//   //}
// `

export const SubMenuSidebar = styled.div<{ collapsed: boolean; top: number }>`
  position: fixed;
  top: ${({ top }) => `${top}px`};
  left: ${({ collapsed }) => (collapsed ? '80px' : '250px')};
  height: fit-content;
  width: 250px;
  background-color: #d9d9d9;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 4px 0px 8px;
  border-radius: 8px;
  z-index: 999;
  overflow-y: hidden;
`

export const SubMenuItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: ${colors.primary};
  cursor: pointer;
  transition: background-color 0.2s;
  border-radius: 4px;
  font-size: ${colors.itemTextSize};
  font-weight: ${colors.itemTextWeight};
  padding: 5px;

  .menu-item-content {
    color: #333;
    transition: background-color 0.2s;
    margin: 2px 10px 2px 0;

    &:active {
      background-color: #007bff;
      color: #fff;
    }

    &:hover {
      background-color: ${colors.menuHover} !important;
      color: #fff;
    }
  }
`

export const Icon = styled(Iconify)`
  font-size: 20px;
  color: inherit;
`

export const ToggleButton = styled.button<{ collapsed: boolean }>`
  color: #fff;
  border: none;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
  text-align: center;
  transition: background-color 0.3s, transform 0.3s;
  display: flex;

  svg {
    width: 24px;
    height: 24px;
  }

  justify-content: ${({ collapsed }) => (collapsed ? 'center' : 'end')};
  padding: ${({ collapsed }) => (collapsed ? '10px 0' : '10px')};
`

export const SubMenuText = styled.div`
  &:hover {
    background-color: #0056b3;
  }
`
export const SearchIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 0px 4px 4px 0px;
  margin: 2px 10px 2px 0;
  padding: 13px 17px;

  svg {
    width: 20px !important;
    height: 20px !important;
    color: ${colors.menuHover};
  }

  path {
    fill: ${colors.menuHover} !important;
  }

  .search-icon {
    color: ${colors.primary} !important;
  }

  &:hover,
  .search-icon:hover {
    background-color: ${colors.menuHover};
    color: ${colors.menuBg} !important;

    path {
      fill: ${colors.menuBg} !important;
    }
  }
`

export const SearchContainer = styled.div`
  padding: 10px;
  background-color: #eeeeee;
`

export const IconWrapper = styled.div<{ isActive: boolean }>`
  svg {
    width: 24px;
    height: 24px;
    color: ${(props) => (props.isActive ? '#015D7F' : '#015D7F')};
  }

  path {
    stroke: ${(props) => (props.isActive ? '#ffffff' : '#015D7F')};
  }
`
