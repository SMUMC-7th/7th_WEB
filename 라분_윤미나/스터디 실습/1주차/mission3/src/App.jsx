//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="container">
      <header className="header">
        <img
          src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F1014%2F126%2Fpng-transparent-pokeball-illustration-pokemon-go-pokeball-trademark-logo-nintendo-3ds-thumbnail.png&type=sc960_832"
        />
        <a href="/7th_WEB/라분_윤미나/스터디 실습/1주차/미션/pokemon.html"
          ><strong>포켓몬 도감</strong></a
        >
      </header>

      <main className="main">
        <div className="cover">
          <div
            className="cover__img"
            style={{backgroundImage: "url('https://search.pstatic.net/sunny/?src=https%3A%2F%2Fyt3.googleusercontent.com%2Fytc%2FAIdro_kavHuNxyZz11W9OjxX6516LaVLpPTSUXsqCBH6uSUhcA%3Ds900-c-k-c0x00ffffff-no-rj&type=a340')"}}
          >
            <img alt="사진" src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fyt3.googleusercontent.com%2Fytc%2FAIdro_kavHuNxyZz11W9OjxX6516LaVLpPTSUXsqCBH6uSUhcA%3Ds900-c-k-c0x00ffffff-no-rj&type=a340" />
          </div>
        </div>
        <div className="description">
          <p className="description__title"><strong>잠만보</strong></p>
          <p className="description__subTitle">귀여운 잠만보</p>
          <p className="description__info">잠만보|포켓몬</p>
          <p className="description__description">
            어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고
            어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고
            어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고
            어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고
          </p>
        </div>
      </main>
      <footer>
        <p>라분@윤미나</p>
      </footer>
    </div>
  )
}

export default App
