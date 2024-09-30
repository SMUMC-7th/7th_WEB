import './App.css'

function App() {

  return (
    <div className='container'>
      <header>
        <img src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA1MThfMTMx%2FMDAxNjUyODM5ODM0ODg0.xxDQB6LzDIx3YzWIvffO3E8y4P7_r-w0_XxpVPfEVcAg.eocKBhzf0utLCYaaLl0v7sfWv-lS1iP2HgQxMWiExxIg.PNG.thsalsgh8%2F05a30c25%25A3%25AD72e2%25A3%25AD4f3c%25A3%25AD9ed1%25A3%25AD306c5be59d71.png&type=a340' />
        <p>포켓몬 도감</p>
      </header>
      <main>
        <div className='imgBox' style={{backgroundImage: `url('/img.png')`}}>
          <img src='/img.png' />
        </div>
        <div className='textBox'>
          <h1>피카츄</h1>
          <h3>귀여운 피카츄</h3>
          <h5>피카츄 | 포켓몬</h5>
          <p>설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명</p>
        </div>
      </main>
      <footer>
        <p>Copyright @hyeyoon</p>
      </footer>
    </div>
  )
}

export default App
