// ./capacity.ts

const unitsLiters = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

function convertLiters(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = unitsLiters.indexOf(fromUnit);
  const toIndex = unitsLiters.indexOf(toUnit);
  const exponent = toIndex - fromIndex;

  return value * Math.pow(10, exponent);
}