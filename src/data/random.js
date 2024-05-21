export function getRandomIndex(max) {
  return Math.floor(Math.random() * max)
}

export function getRandomImageHeight(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}
