import './App.css';
import Header from './components/Header/header.jsx';
import Icon from './components/Icon/icon.jsx';
import Sidebar from './components/Sidebar/sidebar.jsx';
import Cards from './components/Cards/cards.jsx';
import Footer from './components/Footer/footer.jsx';

function App() {
  return (
    <>
      <div className='Container'>
        <Header />
        <div className='main'>
          <div className='main--content'>
            <Sidebar />
            <Cards />
          </div>
          <Icon />
        </div>
        <Footer />
      </div>
    </>
    
  );
}

export default App;