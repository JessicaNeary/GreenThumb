import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <Link className='link' to='/'>
      <h1>Welcome</h1>
    </Link>
  )
}

export default Header
