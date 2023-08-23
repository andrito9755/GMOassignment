import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { appTheme } from './theme.ts'
import { ThemeProvider } from '@emotion/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
