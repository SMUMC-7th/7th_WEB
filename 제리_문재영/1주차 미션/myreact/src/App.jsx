import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='section'>
      <header className="header">
        <a href="/">포켓몬 도감</a>
      </header>
      <main className="main">
        <img src="../public/poketmon.png" alt="#" className="img" />
        <div className="content">
          <div className="content__title">망나뇽</div>
          <div className="content__subtitle">늠름한 포켓몬</div>
          <div className="content__name">망나용 | 포켓몬</div>
          <div className="content__text">넓은 바다 어딘가를 거처로 삼아 날아 이동한다고 하지만
          어디까지나 소문에 지나지 않는다.</div>
        </div>
      </main>
      <footer className="footer">Copyright@제리</footer>
      
    </div>
  )
}

export default App
