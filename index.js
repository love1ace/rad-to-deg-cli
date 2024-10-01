#!/usr/bin/env node

const radToDeg = (radians) => {
  return (radians * 180) / Math.PI;
};

const [radians] = process.argv.slice(2).map(Number);

if (isNaN(radians)) {
  console.error("Invalid input. Please provide a valid number for radians.");
  console.error("Usage: rad-to-deg-cli <radians>");
  process.exit(1);
}

const degrees = radToDeg(radians);

console.log(`Radians: ${radians} rad`);
console.log(`Degrees: ${degrees}°`);