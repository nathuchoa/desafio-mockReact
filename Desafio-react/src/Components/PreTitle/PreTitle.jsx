import React from 'react'
import S from './PreTitle.module.css'

const PreTitle = ({texto}) => {
  return (
    <h3 className={S.preTitle}>{texto}</h3>
  )
}

export default PreTitle