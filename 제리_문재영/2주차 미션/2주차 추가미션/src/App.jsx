import { useState } from 'react'
import './App.css'
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";
import { FaGithub } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
      <Header/>
      <div className="main">
        <Sidebar/>
        <Cards/>
      </div>
      <Footer/>
      <div><a href="https://github.com/jaeyoungmun" target='_blank'><FaGithub /></a></div>
      </div>
      <div id='modal'></div>
    </>
    
  )
}

export default App
