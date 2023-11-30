import React from 'react'
import Navigation from './customer/components/Navigation'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Outlet />
    </div>
  )
}

export default Layout