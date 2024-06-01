import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

import { Tab, ActiveTab } from '../../../styles/HeaderTabStyles'

export const HeaderTab = ({ label, to, ...props }) => {
  const resolved = useResolvedPath(to)
  const match = useMatch({ path: resolved.pathname, end: true })

  return (
    <Link to={to} {...props}>
      {match ? <ActiveTab>{label}</ActiveTab> : <Tab>{label}</Tab>}
    </Link>
  )
}
