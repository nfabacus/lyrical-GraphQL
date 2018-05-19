import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class LyricList extends Component {

  onLike(id, likes) {
    //in the below mutation, optimisticResponse will provide guessed response before data in ui is actually updated, so that the user thinks the data is instantly updated.
    this.props.mutate({ 
      variables: { id },
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          id: id,
          __typename: 'LyricType',
          likes: likes + 1
        }
      }
    })
      // .then(()=> this.props.data.refetch() )
  }

  renderLyrics() {
    const { lyrics } = this.props
    // console.log("lyrics>>", lyrics)
    // console.log("LyricList::this.props>>", this.props)
    // Make sure to have added "likes" in queries "fetchSong" for the likes to show up.
    return lyrics.map(({id, content, likes})=>{
      return (
        <li key={id} className="collection-item">
          {content}
          <div className="vote-box">
            <i
              className="material-icons"
              onClick={()=>this.onLike(id, likes)}
            >
              thumb_up
            </i>
            {likes}
          </div>
        </li>
      )
    })
  }

  render(){
    return (
      <ul className="collection">
        {this.renderLyrics()}
      </ul>
      
    )
  }
}

const mutation = gql`
  mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`

export default graphql(mutation)(LyricList)