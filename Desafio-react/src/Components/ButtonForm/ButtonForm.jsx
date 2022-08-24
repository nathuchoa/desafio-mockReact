import React from 'react'
import S from './ButtonForm.module.css'

const ButtonForm = ({texto}) => {
  return (
    <button className={S.btnForm}>{texto}</button>
  )
}

export default ButtonForm