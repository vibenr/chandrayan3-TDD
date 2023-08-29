// index.js

const { executeCommands } = require('./src/pragyan.functions');

const commands = ['f', 'r', 'u', 'b', 'l'];
const initialPosition = { x: 0, y: 0, z: 0, direction: 'N' };
const finalState = executeCommands(commands, initialPosition);

console.log('Commands:', commands);
console.log('Starting Position:', `(${initialPosition.x}, ${initialPosition.y}, ${initialPosition.z})`);
console.log('Initial Direction:', initialPosition.direction);
console.log(`"f" - (${finalState.x}, ${finalState.y}, ${finalState.z}) - ${finalState.direction}`);
console.log('Final Position:', `(${finalState.x}, ${finalState.y}, ${finalState.z})`);
console.log('Final Direction:', finalState.direction);
