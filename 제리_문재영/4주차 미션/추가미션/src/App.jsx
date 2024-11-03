import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import MovieList from './components/MovieList/MovieList'
import MyList from './components/MyList/MyList'


function App() {
  const [myList,setMyList] = useState({});


  return (
    <>
      <Header/>
      <MovieList setMyList={setMyList}/>
      <MyList mylist={myList}/>
    </>
  )
}

export default App;
