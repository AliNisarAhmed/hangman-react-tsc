import React, { Component } from 'react'

export default class WrongLetters extends Component {
  render() {
    const { wrongLetters } = this.props;
    return (
      <div className="wrongLetters">
        <h4>Wrong letters:</h4>
        <p>
          {wrongLetters && wrongLetters.map((wrongLetter, i, arr) => {
            if (i === arr.length - 1) {
              return <span>{` ${wrongLetter}`}</span>
            } else {
              return <span>{`${wrongLetter}, `}</span>;
            }
          })}
        </p>
      </div>
    )
  }
}
