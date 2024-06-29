// Extra Practice: Cylinder Volume
class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    volume() {
        return (Math.PI * this.radius ** 2 * this.height).toFixed(4);
    }
}

let cylinder = new Cylinder(3, 5);
console.log(`Volume of the cylinder: ${cylinder.volume()}`);
