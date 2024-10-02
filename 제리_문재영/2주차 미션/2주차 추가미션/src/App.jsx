import { useState } from 'react'
import './App.css'
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Cards from "./components/Cards";
// import Footer from "./components/Footer";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Header/>
      <div className="main">
        <Sidebar/>
        <Cards/>
      </div>
      {/* <Footer/> */}
    </div>
  )
}

export default App
