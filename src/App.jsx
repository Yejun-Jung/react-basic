import './App.css'
import Header from './Header/header'
import Nav from './Nav/nav'
import Footer from './Footer/footer'
import Content from './Content/content'
import Aside from './Aside/aside'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <Header/>
        <Nav/>
        <div className="inner">
        <Aside/>
        <Content/>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
