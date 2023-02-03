"use strict";
// ./area.ts
const areaUnits = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];
function convertArea(value, fromUnit, toUnit) {
    const fromIndex = unitsLiters.indexOf(fromUnit);
    const toIndex = unitsLiters.indexOf(toUnit);
    const exponent = toIndex - fromIndex;
    return value * Math.pow(100, exponent);
}
