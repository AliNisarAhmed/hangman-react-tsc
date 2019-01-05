import React, { Component } from 'react'

export default class WordList extends Component {
  render() {
    return (
      <div>
        {this.props.word.map(letterObj => {
          if (!letterObj.isShowing) {
            return '*';
          } else {
            return `${letterObj.letter}`;
          }
        })}
      </div>
    )
  }
}
