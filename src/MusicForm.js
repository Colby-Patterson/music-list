import React from "react";
import { Form } from "semantic-ui-react"

class MusicForm extends React.Component {
  state = {
    song: "",
    artist: ""
  }

  handleSubmit = () => {
    this.props.addNewSong(this.state)
    this.setState({
      song: "",
      artist: ""
    })
  }

  handleChange = (event) =>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Input
            label="Song"
            placeholder="Type Song Name Here"
            name="song"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Artist"
            placeholder="Type Artist Name Here"
            name="artist"
            value={this.state.artist}
            onChange={this.handleChange}
          />

          <Form.Button>Submit</Form.Button>
        </Form.Group>
      </Form>
    )
  }
}

export default MusicForm