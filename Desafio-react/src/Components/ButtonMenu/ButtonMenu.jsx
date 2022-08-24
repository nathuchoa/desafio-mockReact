import React from 'react'
import S from './ButtonMenu.module.css'

const ButtonMenu = ({texto, onClick}) => {
  return (
    <button className={S.button} onClick={onClick}>{texto}</button>
  )
}

export default ButtonMenu