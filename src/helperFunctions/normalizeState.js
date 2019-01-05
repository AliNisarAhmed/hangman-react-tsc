export default function normalizeState(wordArr) {
  return wordArr.map((letter, i) => {
    return {
      letter,
      isShowing: false,
    };
  })
}