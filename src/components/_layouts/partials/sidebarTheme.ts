const sidebarTheme = {
  components: {
    Menu: {
      colorPrimary: '#015d7f', // Primary color for active or focused items
      colorText: '#004159', // Default text color
      colorTextSecondary: '#8c8c8c', // Secondary text color`
      colorTextDisabled: '#d9d9d9', // Disabled text color
      colorTextHover: '#ffffff', // Hover text color
      colorTextSelected: '#ffffff', // Selected text color
      colorItemBg: '#eeeeee', // Background color for items
      colorItemBgHover: '#8c8c8c', // Background color on hover
      colorItemBgSelected: '#004159', // Background color for selected items
      colorItemBorderHover: '#004159', // Border color on hover
      borderRadius: 6, // Rounded corners for menu items
      fontSize: 16, // Font size for menu items
      fontWeight: 300, // Font weight for text
      itemHeight: 42, // Menu item height
      colorSubMenuBg: '#d9d9d9', // Submenu background color
      colorGroupTitleText: '#004159', // Group title text color
      motionDurationSlow: '0s', // Animation duration for open/close transitions
      boxShadow: '0px 0px 4px 0px #00000066', // Shadow for the sidebar
      motion: false, // Completely disable animations for the menu
      // itemHoverColor: '#ffffff', // Custom color for menu items
      itemActiveColor: '#ffffff', // Custom color for menu items
      iconSize: 10,
      itemActiveBg: '#015d7f',
      motionEaseInOut: 'none',
      zIndexPopup: 100,
      popupBg: '#d9d9d9',
      forceSubMenuRender: true,
    },
  },
}

export default sidebarTheme
