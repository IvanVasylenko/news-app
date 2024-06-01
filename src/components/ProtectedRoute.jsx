import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = ({ isLoggedIn, redirectPath = '/login', children }) => {
  if (!isLoggedIn) {
    return <Navigate to={redirectPath} replace />
  }

  return children ? children : <Outlet />
}
