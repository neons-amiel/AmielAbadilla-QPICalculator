import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import ParticleBackground from './components/CoolBg.jsx'
import QPICalculator from './pages/QPICalculator.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <ParticleBackground />
    <QPICalculator />
  </StrictMode>,
)
