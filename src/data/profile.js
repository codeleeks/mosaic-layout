import { getRandomIndex } from "./random"

const DATA = [
  {
    img: 'https://i.pinimg.com/30x30_RS/c0/9c/96/c09c9683cd82955f4a176436a8811268.jpg',
    name: 'Bed Bath & Beyond',
  },
  {
    img: 'https://i.pinimg.com/30x30_RS/41/03/bf/4103bf91d777bd9412dac5172a3e5951.jpg',
    name: 'The Kim Six Fix',
  },
  {
    img: 'https://i.pinimg.com/30x30_RS/5a/3d/0b/5a3d0b09fe15e756a3fcaeab0bf35e7d.jpg',
    name: 'Prudent Penny Pincher - Home Decor, Organization, Crafts, Recipes',
  },
  {
    img: 'https://i.pinimg.com/30x30_RS/70/a3/27/70a327199427e20e375164e3f8ee787d.jpg',
    name: 'With Houna | Dorm Room Ideas| Apartment Decorating | Organization',
  },
  {
    img: 'https://i.pinimg.com/30x30_RS/92/b8/48/92b8482ed8a154325603fcd0cd81b848.jpg',
    name: 'AS Creation DIY',
  },
]

export function getRandomProfileImage() {
  return DATA[getRandomIndex(DATA.length)].img
}
export function getRandomProfileName() {
  return DATA[getRandomIndex(DATA.length)].name
}