import React from 'react'
import S from './Subtitle.module.css'

const Subtitle = ({texto}) => {
  return (
    <h4 className={S.subtitle}>{texto}</h4>
  )
}

export default Subtitle