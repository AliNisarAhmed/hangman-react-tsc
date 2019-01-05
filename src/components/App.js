import React, { Component } from 'react';

import WordDisplay from './WordDisplay';
import WrongLetters from './WrongLetters';

import words from '../words';
import generateRandomWord from '../helperFunctions/generateRandomWord';
import mapToLetterObject from '../helperFunctions/mapToLetterObject';

class App extends Component {
  state = {
    // each word string (whether from the server or locally) will be split into an array of objects
    // where each object = { letter: 'a', isShowing: false }
    // This object will henceforth be referred to as 'letterObject'
    word: [],  
    wrongLetters: [], // will include the wrong guesses by the user
    guess: '',  // the current guess by the user, value of the input field
    guessesLeft: 5,
    message: 'Take a guess',
  }

  componentDidMount() {
    this.input.focus();
    let word = generateRandomWord(words);  // from the list of words (local) we pick a random word
    let letterObjectArr = mapToLetterObject(word);  // this splits each word into an array and maps it to the letterObject
    this.setState({word: letterObjectArr}); 
  }

  handleInputChange = (e) => {
    let value = e.target.value.toLowerCase();
    if (/^[a-z]{0,1}$/.test(value) && value.length <= 1) {
      this.setState({
        [e.target.name]: value
      });
    }
  }

  onGuessSubmit = (e) => {
    // this function fires when the user submits his guess
    e.preventDefault();
    this.checkGuess(this.state.guess);
    this.setState({guess: ''});
  }

  checkGuess = (guess) => {
    // This checks whether the guessed letter is correct 
    let wordArr = this.state.word.map(letterObj => letterObj.letter);  // here we trarnsform each letterObj to letter
    if (wordArr.includes(guess)) {
      this.displayWord(guess);
    } else if (this.state.wrongLetters.includes(guess)) {
      this.setState({message: 'You have already used this word'});
      setTimeout(() => this.setState({message: "Try a letter which you have'nt already used"}), 1500)
    } else {
      this.setState((prevState) => 
      ({
        wrongLetters: [...prevState.wrongLetters, guess], 
        guessesLeft: prevState.guessesLeft - 1
      }));
    }
  }
  
  displayWord = (guess) => {
    // this function fires when the user has guessed correctly
    // its main job is to find all instances of that letter & make truthy their isShowing
    this.setState((state) => ({
      word: state.word.map(letterObj => {
        if (letterObj.letter === guess) {
          return {
            letter: letterObj.letter,
            isShowing: true
          };
        } else {
          return letterObj;
        }
      })
    }));
  }

  resetGame = () => {
    let word = generateRandomWord(words, this.state.word.map(letterObj => letterObj.letter).join(''));
    console.log(word);
    let letterObjectArr = mapToLetterObject(word);
    this.setState({
      word: letterObjectArr,
      wrongLetters: [], 
      guess: '',  
      guessesLeft: 5,
      message: 'Take a guess'
    });
    this.input.focus();
  }

  render() {
    return (
      <div className="App">
        <h1>Hangman Game</h1>
        <p>{this.state.message}</p>
        <WordDisplay word={this.state.word}/>
        <WrongLetters wrongLetters={this.state.wrongLetters}/>
        <p>Guesses Left: {this.state.guessesLeft}</p>
        <form onSubmit={this.onGuessSubmit}>
          <input ref={el => this.input = el} type="text" value={this.state.guess} onChange={this.handleInputChange} name="guess" required/>
        </form>
        <button onClick={this.resetGame}>New Word?</button>
      </div>
    );
  }
}

export default App;
