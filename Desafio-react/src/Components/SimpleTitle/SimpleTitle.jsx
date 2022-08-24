import React from 'react'
import S from './SimpleTitle.module.css'

const SimpleTitle = ({texto}) => {
  return (
    <div className={S.simpletitle}>{texto}</div>
  )
}

export default SimpleTitle