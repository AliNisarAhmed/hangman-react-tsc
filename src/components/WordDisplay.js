import React, { Component } from 'react'

export default class WordDisplay extends Component {
  render() {
    return (
      <div className="wordDisplay">
        {this.props.word.map(letterObj => {
          if (!letterObj.isShowing) {
            return <span className="letter">{'*'}</span>;
          } else {
            return <span className="letter">{`${letterObj.letter}`}</span>;
          }
        })}
      </div>
    )
  }
}
