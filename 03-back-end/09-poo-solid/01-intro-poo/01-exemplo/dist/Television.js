"use strict";
class Television {
    constructor(brand, size, resolution, connections) {
        this.brand = brand;
        this.size = size;
        this.resolution = resolution;
        this.connections = connections;
    }
    turnOn() {
        console.log(`Tv ligada: ${this.brand} ${this.size} ${this.resolution} ${this.connections}`);
    }
}
const tv1 = new Television('LG', 47, '4k', ['Wifi', 'Ethernet', 'HDMI']);
console.log(tv1);
tv1.turnOn();
