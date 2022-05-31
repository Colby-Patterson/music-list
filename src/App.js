import './App.css';
import { Button, Container, Header } from "semantic-ui-react";
import React from 'react';
import MusicList from "./MusicList"

class App extends React.Component{
  state = {
    songs: [
      {id: 1, song: 'Let It Be', artist: 'Beatles'}
    ]
  }

  addNewSong = (songInfo)=>{
    let newSong = {...songInfo}
    let listOfSongs = [...this.state.songs, newSong]
    this.setState({
      songs: listOfSongs
    })
  }

  render() {

    return (
    <Container>
      <div>
        <h1>Music List</h1>
        <MusicList songs={this.state.songs}/>
      </div>
    </Container>

    )
  }
}

export default App;
