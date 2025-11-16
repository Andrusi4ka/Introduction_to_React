import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.css'

import App from './App.jsx'
import Form from './components/sections/form.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Form />
  </StrictMode>
)
