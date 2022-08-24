import React from 'react'
import ButtonMenu from '../ButtonMenu/ButtonMenu'

const Produto = ({nome, descricao, precoInicial, precoDesconto, parecelamento}) => {
  
  return (
    <div>
      <img></img>
      <div>
        <h3>{nome}</h3>
        <p>{descricao}</p>
        <p>{precoInicial}</p>
        <p><span>{precoDesconto}</span></p>
        <p>{parecelamento}</p>
      </div>
      <ButtonMenu texto={'Comprar'} />
    </div>
  )
}

export default Produto