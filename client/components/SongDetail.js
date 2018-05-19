import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import fetchSong from '../queries/fetchSong'
import LyricCreate from './LyricCreate'
import LyricList from './LyricList'

class SongDetail extends Component {
  render(){
    console.log("this.props.data:", this.props.data)
    const { song } = this.props.data  //this becomes available via graphql query.

    if(!song) return ( <div>Loading...</div> )

    return (
      <div>
      <Link to="/">Back</Link>
        <h3>{ song.title }</h3>
        <LyricList lyrics={song.lyrics} />
        <LyricCreate songId={song.id}/>
      </div>
    )

  }
}

export default graphql(fetchSong, {
  options: (props) =>{ return { variables: { id: props.match.params.id }} }
})(SongDetail)