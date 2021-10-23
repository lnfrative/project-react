// region import
import React from 'react'

// components
import { Switch, Route } from 'react-router-dom'

// views
import { Home, Signup } from '@/views'
// endregion

function App() {
  return (
    <Switch>
      <Route exact path="/" render={Home} />
      <Route exact path="/sign-up" render={Signup} />
    </Switch>
  )
}

export default App
