import { useState } from 'react'
import './App.css'
import ButtonForm from './Components/ButtonForm/ButtonForm'
import Footer from './Components/Footer/Footer'
import FormCompartilha from './Components/FormCompartilha/FormCompartilha'
import GradeProdutos from './Components/GradeProdutos/GradeProdutos'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'

function App() {

  return (
    <div className="Body">
      <Header />
      <Main />
      <GradeProdutos />
      <ButtonForm texto={'Ainda mais produtos aqui'} />
      <FormCompartilha />
      <Footer />
    </div>
  )
}

export default App
