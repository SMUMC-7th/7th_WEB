import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './components/button.css'
import './components/input.css'

createRoot(document.getElementById('root')).render(
    <App />

)
