// region import
import React from 'react'

// components
import { Switch, Route } from 'react-router-dom'

// views
import { Home } from '@/views'
// endregion

function App() {
  return (
    <Switch>
      <Route exact path="/" render={Home} />
    </Switch>
  )
}

export default App
