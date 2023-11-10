import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'semantic-ui-css/semantic.min.css'
import { Provider } from './components/AnimatedRoutes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    {Provider}
  </React.StrictMode>,
)
