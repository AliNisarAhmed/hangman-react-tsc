export default function generateRandomWord(arr: string[], word ?: string): string {
  let random = Math.floor(Math.random() * arr.length);
  while (word && arr[random] === word) {
    random = Math.floor(Math.random() * arr.length);
  }
  return arr[random];
}

// takes a random word out of the array of words, and splits that word to an array