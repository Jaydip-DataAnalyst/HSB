import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { LocationProvide } from './context/LocationContext.jsx'
import { createContext } from 'react'
import BannerSlider from './components/shared/BannerSlider.jsx'
import App from './App.jsx'   // ← only one of these
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <LocationProvide>
          <App />
      </LocationProvide>
    </Router>
  </StrictMode>,
)