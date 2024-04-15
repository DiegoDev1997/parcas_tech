import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ContextUIProvider } from './context/contextUI/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
 <ContextUIProvider>
   <React.StrictMode>
    <App />
  </React.StrictMode>,
 </ContextUIProvider>
)
