import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import QPICalculator from './pages/QPICalculator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QPICalculator />
  </StrictMode>,
)
