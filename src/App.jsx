import './App.css'
import Home from './pages/home'
import Footer from './components/footer'
import Logo from "../src/images/Cinemax.png"


import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { home, movieInfos } from './pages'

function App() {
  return (
    <>
      <Header />

      <Home />

      <Footer />
    </>
  )
}

export default App



function Header() {
  return (
    <>
      <div class="header">
        <img width="50px" height="50px" src={Logo} class="logo" />
        <h1>Movify</h1>
      </div>
    </>
  )
}


