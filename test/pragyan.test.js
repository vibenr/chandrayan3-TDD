const {
    createSpacecraft,
    moveForward,
    moveBackward,
    turnLeft,
    turnRight,
    turnUp,
    turnDown,
    executeCommands,
} = require('../src/pragyan.functions');

describe('Spacecraft Functions', () =>
{
    describe('createSpacecraft', () =>
    {
        test('Should create a spacecraft with initial properties', () =>
        {
            const spacecraft = createSpacecraft(0, 0, 0, 'N');
            expect(spacecraft).toEqual({ x: 0, y: 0, z: 0, direction: 'N' });
        });
    });

    describe('moveForward', () =>
    {
        test('Should move spacecraft forward in the correct direction', () =>
        {
            const spacecraft = createSpacecraft(0, 0, 0, 'N');
            moveForward(spacecraft);
            expect(spacecraft).toEqual({ x: 0, y: 1, z: 0, direction: 'N' });
        });
        // test('Should not move spacecraft forward diagonally', () =>
        // {
        //     const spacecraft = createSpacecraft(0, 0, 0, 'N');
        //     // Move spacecraft diagonally by changing both x and y coordinates
        //     spacecraft.x = 1;
        //     spacecraft.y = 1;
        //     moveForward(spacecraft);
        //     // Expect the position to remain unchanged
        //     expect(spacecraft).toEqual({ x: 1, y: 1, z: 0, direction: 'N' });
        // });
    });

    describe('moveBackward', () =>
    {
        test('Should move spacecraft backward in the correct direction', () =>
        {
            const spacecraft = createSpacecraft(0, 0, 0, 'N');
            moveBackward(spacecraft);
            expect(spacecraft).toEqual({ x: 0, y: -1, z: 0, direction: 'N' });
        });
    });

    describe('turnLeft', () =>
    {
        test('Should turn spacecraft to the left', () =>
        {
            const spacecraft = createSpacecraft(0, 0, 0, 'N');
            turnLeft(spacecraft);
            expect(spacecraft.direction).toBe('W');
        });
    });

    describe('turnRight', () =>
    {
        test('Should turn spacecraft to the right', () =>
        {
            const spacecraft = createSpacecraft(0, 0, 0, 'N');
            turnRight(spacecraft);
            expect(spacecraft.direction).toBe('E');
        });
    });

    describe('turnUp', () =>
    {
        test('Should turn spacecraft upwards', () =>
        {
            const spacecraft = createSpacecraft(0, 0, 0, 'N');
            turnUp(spacecraft);
            expect(spacecraft.direction).toBe('Up');
        });
    });

    describe('turnDown', () =>
    {
        test('Should turn spacecraft downwards', () =>
        {
            const spacecraft = createSpacecraft(0, 0, 0, 'N');
            turnDown(spacecraft);
            expect(spacecraft.direction).toBe('Down');
        });
    });

    describe('executeCommands', () =>
    {

        test('Should execute commands and return final state', () =>
        {
            // setting up the initial positions
            const initialPosition = {
                x: 0,
                y: 0,
                z: 0,
                direction: 'N',
            };

            const commands = ['f', 'r', 'u', 'b', 'l'];

            const finalState = executeCommands(commands, initialPosition);

            expect(finalState).toEqual({
                x: 0,
                y: 1,
                z: -1,
                direction: 'N',
            });
        });




        test('should handle multiple rotations in different directions', () =>
        {
            // setting up the initial positions
            const initialPosition = {
                x: 0,
                y: 0,
                z: 0,
                direction: 'N',
            };

            const commands = ['r', 'r', 'r', 'l', 'l', 'l'];

            const finalState = executeCommands(commands, initialPosition);

            expect(finalState).toEqual({
                x: 0,
                y: 0,
                z: 0,
                direction: 'N',
            });
        });


        test('Should execute a sequence of complex movements and rotations', () =>
        {

            // setting up the initial positions
            const initialPosition = {
                x: 0,
                y: 0,
                z: 0,
                direction: 'N',
            };


            const commands = ['f', 'r', 'b', 'r', 'f', 'f', 'l', 'l', 'b', 'u', 'd'];
            const finalState = executeCommands(commands, initialPosition);

            // The expected final state can be calculated manually based on the commands
            expect(finalState).toEqual({
                x: -1,
                y: -2,
                z: 0,
                direction: 'Down',
            });
        });






        // test('Should execute complex commands and return final state', () =>
        // {
        //     const commands = ['f', 'r', 'u', 'b', 'l', 'd', 'f', 'l', 'f', 'r', 'f', 'f', 'b', 'b', 'r', 'l', 'b', 'f'];
        //     const finalState = executeCommands(commands, initialPosition);

        //     // The expected final state can be calculated manually based on the commands
        //     expect(finalState).toEqual({
        //         x: 2,
        //         y: -2,
        //         z: 0,
        //         direction: 'W',
        //     });
        // });
    });

    // Add more test cases for different scenarios
});