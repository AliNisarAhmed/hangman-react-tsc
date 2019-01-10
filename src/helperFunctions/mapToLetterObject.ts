import getRandomInt from './getRandomInt';
import ILetterObj from '../interfaces/ILetterObj';

export default function mapToLetterObject (word: string): ILetterObj[] {
  let randomLettersReqd = Math.floor(word.length / 3);  // for every 3rd letter in a word, we get an 'open' letter
  let arr = new Array(randomLettersReqd).fill(1);
  arr = arr.map(() => getRandomInt(0, word.length)).sort((a, b) => b - a);  
  let result = word.split('').map((letter, i) => {
    if (i === arr[arr.length - 1]) {
      arr.pop();
      return { letter, isShowing: true };
    }
    return {
      letter,
      isShowing: false,
    };
  });
  return result;
}