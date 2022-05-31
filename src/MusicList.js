import React from "react";
import { Table } from "semantic-ui-react"
import Song from "./Song";

class MusicList extends React.Component {
  renderSongs = () => {
    return this.props.songs.map((song) => {
      return <Song key={song.id} {...song} />
    })
  }

  render() {
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Song Name</Table.HeaderCell>
            <Table.HeaderCell>Artist</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>{this.renderSongs()}</Table.Body>
      </Table>
    )
  }
}

export default MusicList