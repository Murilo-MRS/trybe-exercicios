// ./volume.ts

const volumeUnits = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];

function convertVolume(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = unitsLiters.indexOf(fromUnit);
  const toIndex = unitsLiters.indexOf(toUnit);
  const exponent = toIndex - fromIndex;

  return value * Math.pow(1000, exponent)
};
