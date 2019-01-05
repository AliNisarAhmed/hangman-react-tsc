import React, { Component } from 'react'

export default class WrongLetters extends Component {
  render() {
    const { wrongLetters } = this.props;
    return (
      <div>
        WRong letters would be displayed here...
        <p>
          {wrongLetters && wrongLetters.map((wrongLetter, i, arr) => {
            if (i === arr.length - 1) {
              return ` ${wrongLetter}`
            } else {
              return `${wrongLetter}, `;
            }
          })}
        </p>
      </div>
    )
  }
}
