import React from "react";
import { Table } from "semantic-ui-react"

class Song extends React.Component {

  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.song}</Table.Cell>
        <Table.Cell>{this.props.artist}</Table.Cell>
      </Table.Row>
    )
  }
}

export default Song