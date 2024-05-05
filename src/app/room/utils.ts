function shuffle(array: string[]) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export function pairPeople(people: string[]) {
  if (!people.length) return {};

  const shuffledPeople = shuffle([...people]);
  const pairs: Record<string, string> = {};

  shuffledPeople.unshift(shuffledPeople.pop());

  for (let i = 0; i < shuffledPeople.length; i++) {
    pairs[shuffledPeople[i]] = shuffledPeople[(i + 1) % shuffledPeople.length];
  }
  return pairs;
}
