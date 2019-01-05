export default function generateRandomWord(arr) {
  let random = Math.floor(Math.random() * arr.length);
  return arr[random].split('');
}

// takes a random word out of the array of words, and splits that word to an array