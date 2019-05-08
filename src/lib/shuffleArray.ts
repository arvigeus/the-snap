const shuffleArray = (array: Array<any>) => {
  let currentIndex = array.length;
  const clone = [...array];

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    const temporaryValue = clone[currentIndex];
    clone[currentIndex] = clone[randomIndex];
    clone[randomIndex] = temporaryValue;
  }

  return clone;
};

export default shuffleArray;
