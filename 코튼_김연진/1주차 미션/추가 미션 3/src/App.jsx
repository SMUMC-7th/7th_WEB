import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <header>포켓몬 도감</header>
        <main className='flex-center'>
            <div className="main__img flex-center">
              <div className="cover-img" style={{"background-image": "url('/src/다운로드.jpeg')"}}>
                    <img src="/src/다운로드.jpeg" alt="" className="main__img"></img>
              </div>
            </div>
            <div className="main__info flex-center">
                <h1>잠만보</h1>
                <h5>귀여운 잠만보</h5>
                <h5 style={{'color': "blue"}}>잠만보 | 포켓몬</h5>
                <h6 style={{'textAlign': 'center'}}>엄청나게 긴 설명 엄청나게 긴 설명 엄청나게 긴 설명 엄청나게 긴 설명 엄청나게 긴 설명 엄청나게 긴 설명 엄청나게 긴 설명 엄청나게 긴 설명 엄청나게 긴 설명 엄청나게 긴 설명 엄청나게 긴 설명 엄청나게 긴 설명 엄청나게 긴 설명 엄청나게 긴 설명 엄청나게 긴 설명 엄청나게 긴 설명</h6>
            </div>
        </main>
        <footer className='flex-center'>copyright @김연진</footer>
      </div>
    </>
  )
}

export default App
