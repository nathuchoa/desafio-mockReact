import { useState } from 'react'
import './App.css'
import GradeProdutos from './Components/GradeProdutos/GradeProdutos'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'

function App() {

  return (
    <div className="Body">
      <Header />
      <Main />
      <GradeProdutos />
    </div>
  )
}

export default App
