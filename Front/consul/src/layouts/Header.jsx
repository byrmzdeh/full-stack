import React from 'react'
import '../sass/header.scss'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/logo/logo.png" alt="err" />
      <ul>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/add'}>Add Page</NavLink></li>
        <li><NavLink to={'/basket'}>Basket</NavLink></li>
        <li><NavLink to={'/wishlist'}>Wishlist</NavLink></li>
        <li><NavLink to={'/contact'}>Contact</NavLink></li>
      </ul>

    </div>
  )
}

export default Header