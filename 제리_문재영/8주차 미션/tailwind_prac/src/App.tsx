import { useState } from 'react'
import './App.css';
import cn from 'classnames';
import Button from './components/Button';
import Button2 from './components/Button2';

function App() {
  const [count, setCount] = useState(0)
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div>
      <Button>
        <div>문재영</div>
      </Button>
      <Button variant='secondary'>
        <div>버튼</div>
      </Button>
      <Button onClick={() => {}} className='text-5xl' variant='error'>버튼</Button>
    </div>
  )
}

export default App
