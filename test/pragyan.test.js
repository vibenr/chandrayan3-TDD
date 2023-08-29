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
            const spacecraft = createSpacecraft(1, 2, 3, 'N');
            expect(spacecraft).toEqual({ x: 1, y: 2, z: 3, direction: 'N' });
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

    test('Should execute commands and return final state', () =>
    {
        const commands = ['f', 'r', 'u', 'b', 'l'];
        const finalState = executeCommands(commands);

        expect(finalState).toEqual({
            x: 0,
            y: 1,
            z: -1,
            direction: 'N',
        });
    });
    // Add more test cases for different scenarios
});
