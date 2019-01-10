import React, { Component } from 'react'

interface WrongLetterProps {
  wrongLetters: string[];
}

export default class WrongLetters extends Component<WrongLetterProps> {
  render() {
    const { wrongLetters } = this.props;
    return (
      <div className="wrongLetters">
        <h4 className="wrongLetters__heading">Wrong letters:</h4>
        <div className="wrongLetters__container">
          <p className="wrongLetters__text">
            {
              wrongLetters && wrongLetters.map((wrongLetter, i, arr) => {
                if (i === arr.length - 1) {
                  return <span key={`${wrongLetter}${i}`}>{` ${wrongLetter}`}</span>
                } else {
                  return <span key={`${wrongLetter}${i}`}>{`${wrongLetter}, `}</span>;
                }
              })
            }
          </p>
        </div>
      </div>
    )
  }
}
