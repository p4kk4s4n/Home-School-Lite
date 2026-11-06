import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { registerScopedServiceWorker } from './lib/update'
import './styles.css'

// Register our strictly scoped service worker (/Home-School-Lite/sw.js)
void registerScopedServiceWorker()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
