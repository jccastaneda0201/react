import { createRoot } from 'react-dom/client'
import './index.css'
import Booklist from './Booklist'
import { StrictMode } from 'react'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Booklist />
  </StrictMode>
)


