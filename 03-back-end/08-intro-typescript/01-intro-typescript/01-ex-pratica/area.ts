// ./area.ts

const areaUnits = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];

function convertArea(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = units.indexOf(fromUnit);
  const toIndex = units.indexOf(toUnit);
  const exponent = toIndex - fromIndex;

  return value * Math.pow(100, exponent);
}