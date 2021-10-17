import React from 'react'

// components
import { Layout } from '@/components'
import { Switch, Route } from 'react-router-dom'

// views
import { Home } from '@/views'

const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/" render={Home} />
    </Switch>
  </Layout>
)

export default App
