import React from 'react'

type Props = {
  className?: string
}

const SidebarToggle: React.FC<Props> = () => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="20" height="20" rx="3.5" stroke="#015D7F" />
      <rect x="2" y="2" width="8" height="17" rx="2" fill="#015D7F" />
    </svg>
  )
}

export default SidebarToggle
