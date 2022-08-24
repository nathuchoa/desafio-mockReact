import React from 'react'
import ButtonForm from '../ButtonForm/ButtonForm'
import ButtonMenu from '../ButtonMenu/ButtonMenu'
import Produto from '../Produto/Produto'
import S from './GradeProdutos.module.css'

const GradeProdutos = () => {
  return (
    <div className={S.containerSelecao}>
        <h2>Sua seleção especial</h2>
        <div className={S.gridContainer}>
            <Produto className={S.gridItem}
            nome="Nome do Produto"
            descricao="Descrição do produto um pouco maior, com duas linhas ou três que explica melhor do que se trata."
            precoInicial="De: R$23,99"
            precoDesconto="Por: R$19,99"
            parecelamento="ou 2x de R$9,99"
            />
            <Produto 
            nome="Nome do Produto"
            descricao="Descrição do produto um pouco maior, com duas linhas ou três que explica melhor do que se trata."
            precoInicial="De: R$23,99"
            precoDesconto="Por: R$19,99"
            parecelamento="ou 2x de R$9,99"
            />
            <Produto 
            nome="Nome do Produto"
            descricao="Descrição do produto um pouco maior, com duas linhas ou três que explica melhor do que se trata."
            precoInicial="De: R$23,99"
            precoDesconto="Por: R$19,99"
            parecelamento="ou 2x de R$9,99"
            />
            <Produto 
            nome="Nome do Produto"
            descricao="Descrição do produto um pouco maior, com duas linhas ou três que explica melhor do que se trata."
            precoInicial="De: R$23,99"
            precoDesconto="Por: R$19,99"
            parecelamento="ou 2x de R$9,99"
            />
            <Produto 
            nome="Nome do Produto"
            descricao="Descrição do produto um pouco maior, com duas linhas ou três que explica melhor do que se trata."
            precoInicial="De: R$23,99"
            precoDesconto="Por: R$19,99"
            parecelamento="ou 2x de R$9,99"
            />
            <Produto 
            nome="Nome do Produto"
            descricao="Descrição do produto um pouco maior, com duas linhas ou três que explica melhor do que se trata."
            precoInicial="De: R$23,99"
            precoDesconto="Por: R$19,99"
            parecelamento="ou 2x de R$9,99"
            />
            <Produto 
            nome="Nome do Produto"
            descricao="Descrição do produto um pouco maior, com duas linhas ou três que explica melhor do que se trata."
            precoInicial="De: R$23,99"
            precoDesconto="Por: R$19,99"
            parecelamento="ou 2x de R$9,99"
            />
            <Produto 
            nome="Nome do Produto"
            descricao="Descrição do produto um pouco maior, com duas linhas ou três que explica melhor do que se trata."
            precoInicial="De: R$23,99"
            precoDesconto="Por: R$19,99"
            parecelamento="ou 2x de R$9,99"
            />
        </div>
    </div>
  )
}

export default GradeProdutos