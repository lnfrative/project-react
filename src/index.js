import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

// root component
import App from './App.tsx'

// global css
import '@/css/index.css'

const component = (
  <Router>
    <App />
  </Router>
)
// eslint-disable-next-line no-undef
const element = document.getElementById('app')

render(component, element)
