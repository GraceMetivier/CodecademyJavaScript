const satellite = 'The Moon';
const galaxy = 'The Milky Way';

let stars = 'North Star';

const myNightSky = () => {
  stars = 'Sirius';
  return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(myNightSky());
console.log(stars());