import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Register,Login } from '../../modules/index.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Register/>
    <Login/>
    <App />
  </StrictMode>,
)
