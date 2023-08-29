const { executeCommands } = require('./src/pragyan.functions');

// Define the commands array.
const commands = ['f', 'r', 'u', 'b', 'l'];

// Define the initial position of the spacecraft.
const initialPosition = {
    x: 0,
    y: 0,
    z: 0,
    direction: 'N',
};

// Calculate the final state of the spacecraft after executing the commands.
const finalState = executeCommands(commands, initialPosition);


// print the required input/output

console.log('\n**Commands**');
console.log(commands);

console.log('\n**Starting Position**');
console.log(`(${initialPosition.x}, ${initialPosition.y}, ${initialPosition.z})`);

console.log('\n**Initial Direction**');
console.log(initialPosition.direction);

console.log('\n**Final Position**');
console.log(`(${finalState.x}, ${finalState.y}, ${finalState.z})`);

console.log('\n**Final Direction**');
console.log(finalState.direction);