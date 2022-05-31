import './App.css';
import { Button, Container, Header } from "semantic-ui-react";
import React from 'react';
import MusicList from "./MusicList"
import MusicForm from './MusicForm';

class App extends React.Component {
  state = {
    songs: [
      { id: 1, song: 'Let It Be', artist: 'Beatles' },
      { id: 2, song: 'Carry On Wayward Son', artist: 'Kansas' },
      { id: 3, song: `Wouldn't It Be Nice`, artist: 'The Beach Boys' }
    ]
  }

  addNewSong = (songInfo) => {
    let newSong = { ...songInfo }
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
          <MusicList songs={this.state.songs} />
          <MusicForm addNewSong={this.addNewSong}/>
        </div>
      </Container>

    )
  }
}

export default App;
