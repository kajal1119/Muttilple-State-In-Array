import React from 'react'
import Logo from "../asset/logo.png"
const Header = () => {
  return (
    <header>
      <img src={Logo} alt=''></img>
      <a href='/'>Home</a>
    </header>
  )
}

export default Header
