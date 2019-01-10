import React, { Component } from 'react'
import ILetterObj from '../interfaces/ILetterObj';

interface WordDisplayProps {
  word: ILetterObj[];
}



export default class WordDisplay extends Component<WordDisplayProps> {
  render() {
    return (
      <div className="wordDisplay">
        {this.props.word.map((letterObj, i) => {
          if (!letterObj.isShowing) {
            return <span key={letterObj.letter + i} className="letter">{'*'}</span>;
          } else {
            return <span key={letterObj.letter + i} className="letter">{`${letterObj.letter}`}</span>;
          }
        })}
      </div>
    )
  }
}
