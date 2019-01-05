export default function mapToLetterObject (word) {
  return word.split('').map((letter, i) => {
    return {
      letter,
      isShowing: false,
    };
  })
}