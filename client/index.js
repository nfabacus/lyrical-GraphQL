import './style/style.css'
import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { HashRouter } from 'react-router-dom'

import App from './components/App'
import SongList from './components/SongList'

const client = new ApolloClient({
  dataIdFromObject: o => o.id //this will automatically refetch data which has root id. in case of lyricCreate, it has song id.
})


const Root = () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <App />
      </HashRouter>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
