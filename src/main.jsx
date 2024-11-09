import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { MantineProvider } from '@mantine/core'
import ContextProvider from "./context/Context.jsx";

createRoot(document.getElementById('root')).render(
  <ContextProvider>
  <BrowserRouter>
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <App />
    </MantineProvider>
  </BrowserRouter>
  
  </ContextProvider>
,
)
