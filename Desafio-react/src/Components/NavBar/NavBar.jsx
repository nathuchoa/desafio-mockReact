import React from 'react'
import ButtonMenu from '../ButtonMenu/ButtonMenu'
import S from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={S.navbar}>
    <ButtonMenu texto="Conheça a Linx" />
    <ButtonMenu texto="Ajude o algorítimo" />
    <ButtonMenu texto="Seus produtos" />
    <ButtonMenu texto="Compartilhe" />
    </nav>
  )
}

export default NavBar