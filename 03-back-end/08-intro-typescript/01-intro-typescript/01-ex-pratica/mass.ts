// ./mass.ts

const unitsMass = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

function convertMass(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = unitsMass.indexOf(fromUnit);
  const toIndex = unitsMass.indexOf(toUnit);
  const exponent = toIndex - fromIndex;

  return value * Math.pow(10, exponent);
};
