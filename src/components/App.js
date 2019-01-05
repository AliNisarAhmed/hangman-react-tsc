import React, { Component } from 'react';

import WordList from './WordList';
import WrongLetters from './WrongLetters';

import words from '../words';
import generateRandomWord from '../helperFunctions/generateRandomWord';
import normalizeState from '../helperFunctions/normalizeState';

class App extends Component {
  state = {
    word: [],
    wrongLetters: [],
    guess: '',
  }

  componentDidMount() {
    let word = generateRandomWord(words);
    let normalized = normalizeState(word);
    this.setState({word: normalized});
  }

  handleInputChange = (e) => {
    if (this.state.guess.length < 1) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  }

  onWordSubmit = (e) => {
    e.preventDefault();
    this.checkGuess(this.state.guess);
    this.setState({guess: ''});
  }

  checkGuess = (guess) => {
    let wordArr = this.state.word.map(letterObj => letterObj.letter);
    if (wordArr.includes(guess)) {
      this.displayWord(guess);
    } else {
      this.setState({wrongLetters: [...this.state.wrongLetters, guess]});
    }
  }
  
  displayWord = (guess) => {
    let word = [...this.state.word];
    let index = word.findIndex(letterObj => letterObj.letter === guess);
    word[index].isShowing = true;
    this.setState({word});
  }

  render() {
    return (
      <div className="App">
        <h1>Hangman Game</h1>
        <p>Guess What????</p>
        <WordList word={this.state.word}/>
        <WrongLetters wrongLetters={this.state.wrongLetters}/>
        <p>Guesses Left: 5</p>
        <form onSubmit={this.onWordSubmit}>
          <input type="text" value={this.state.guess} onChange={this.handleInputChange} name="guess" />
        </form>
        <button>New Word</button>
      </div>
    );
  }
}

export default App;
