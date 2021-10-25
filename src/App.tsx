// region import
import React from 'react'

// utilities
import { resources } from '@/utilities'

// components
import { Switch, Route } from 'react-router-dom'

// views
import { Home, Signup, Dashboard } from '@/views'
// endregion

function App() {
  return (
    <Switch>
      <Route exact path={resources.path.home} render={Home} />
      <Route exact path={resources.path.signup} render={Signup} />
      <Route exact path={resources.path.dashboard} render={Dashboard} />
    </Switch>
  )
}

export default App
