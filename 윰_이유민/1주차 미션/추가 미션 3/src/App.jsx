import './animalCrossingCard.css';

function App() {
  const logoImg = "//i.namu.wiki/i/aK6tDq6Bp1F26Tm-JS1VyF0AFh8fm3TDI4j1icNtJGJdp2ayqRqDSctBRJGoOVr43CKrfv1-mHHzcOwtb7ywE5i-e6DQOuFS-l834jCJm8uWg41zVvA3cIMNBsNlf0Wsy-2EC6TGwUSAoGeX6K_CKg.svg";

  const bgImg = "//i.namu.wiki/i/TpkrjOSzimW3TVgvXi32joqwCy0W027d42WlrthALzdp9r_Rv47U6vzs-qxKPVzkDOMG1FgdDG4YUTAhzWxoqA9I_LmB8WDcpzWlRA_lVzPhakgXAL-baR_pHbN9QnjhtCduT3juLseUMzIcyho6vg.webp";

  const BboyamImg = "//i.namu.wiki/i/t0LU3B_TTDPODOpmbYVXC9IyGdL49yuaLupYRtsQr_5F7aMa-qoV3QRE5a-XKUQp8Ij-gl_a4wZfJwXyITe-9QUkIk0aMafsQ8B38HemRI6i8ca-7q2hurrN9XFKyyJTY9sBpa9195yLxeMG34zkZA.webp";

  return (
    <div className='container'>
      <header className='header'>
        <img src={logoImg} alt='' />
        <a href=''>동물의숲 도감</a>
      </header>

      <main className='main'>
        <div className='cover-img'
          style={{
            background: `url(${bgImg}) no-repeat center/cover`
          }}
        >
          <img src={BboyamImg} alt='뽀야미' />
        </div>
        <div className='description'>
          <div className='description__title'>
            뽀야미
          </div>
          <div className='description__subTitle'>
            귀여운 뽀야미
          </div>
          <div className='description__char-info'>
            뽀야미 | 동물의숲 주민
          </div>
          <div className='description__char-description'>
            뽀야미는 어쩜 이렇게 순수하고 착할까? <br />
            어릴 때부터 사랑을 듬뿍 받으면서 자란 게 분명해요. <br /> 좋아하는 노래는 졸면서 꾸는 꿈이며 취미는 자연, <br /> 선호하는 스타일은 엘레강스/큐트이고 선호 색상은 빨간색/분홍색이에요.
          </div>
        </div>
      </main>
      
      <footer className='footer'>
        Copyright @UMC
      </footer>
  </div>
  )
}

export default App
