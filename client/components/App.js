import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import SongList from './SongList'
import SongCreate from './SongCreate'

class App extends Component {
  render(){
    return (
      <div className="container">
        <Switch>
          <Route exact path="/" component={SongList} />
          <Route path="/songs/new" component={SongCreate} />
          <Route component={SongList} />
        </Switch>
      </div>
    )
  }
}

export default App