import React from 'react'
import Mainbody from './components/mainbody'
import Navbar from './components/navbar'
import Footer from './components/footer'

const App = () => {
  return (
    <main>

      <div className="bg-primary-color"></div>
      <Navbar/>
      <Mainbody />
      <Footer/>
      
    </main>
  )
}

export default App
