import { stringCount } from './utils';

enum MapTile {
  Ocean = 'X',
  Uninfected = '0',
  Infected = '1'
}

/**
 * Return the percentage of the population that are infected by the virus.
 * - If one person gets infected on a continent, the entire continent will get infected.
 * - The first and last continents are not connected.
 * - The virus cannot spread across the ocean.
 * - For maps without X, there are no oceans so the entire planet would become infected, return 100
 * - For maps without 0 or 1, there are no people, return 0.
 * @param worldMap Map of the world in the form of a string (`X`: Ocean, `1`: Infected, `0`: Uninfected)
 */
function pandemia(worldMap: string): number {
  const totalPopulation = stringCount(worldMap, MapTile.Infected, MapTile.Uninfected);

  if (!totalPopulation) {
    return 0;
  }

  // Split the world map into continents and determine the infected population
  const infected = worldMap.split(MapTile.Ocean).reduce((total, continent) => {
    // If a continent contains an infected, add the entire continent population
    // to the total infected; Otherwise, the continent is safe...
    return (total += continent.includes(MapTile.Infected) ? continent.length : 0);
  }, 0);

  return (infected / totalPopulation) * 100;
}

(function main(): void {
  const maps = [
    '01000000X000X011X0X',
    '01X000X010X011XX',
    'XXXXX1',
    '00000000X00X0000',
    '0000000010',
    '000001XXXX0010X1X00010',
    'X00X000000X10X0100'
  ];

  for (const map of maps) {
    console.log(pandemia(map));
  }
})();
