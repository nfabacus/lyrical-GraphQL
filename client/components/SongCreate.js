import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from 'react-router-dom'
import query from '../queries/fetchSongs'


class SongCreate extends Component {

  constructor(props){
    super(props)
    this.state = {
      title: ""
    }
  }

  onHandleSubmit(e){
    e.preventDefault()
    
    this.props.mutate({
      variables: { title: this.state.title },
      refetchQueries: [{ query }]   // use this refetchQueries where query is not associated with the component (i.e.SongCreate)
    }).then(()=> this.props.history.push('/'))
  }

  render(){
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create a New Song</h3>
        <form onSubmit={this.onHandleSubmit.bind(this)}>
          <label>Song Title:</label>
          <input
            value={this.state.title}
            onChange={(e)=>this.setState({title: e.target.value })}
          />
        </form>
      </div>
    )
  }
}

const mutation = gql `
  mutation AddSong($title: String) {
    addSong(title: $title){
      id
      title
    }
  }
`

export default graphql(mutation)(SongCreate)