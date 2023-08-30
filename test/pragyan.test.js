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

    const initialPosition = {
        x: 0,
        y: 0,
        z: 0,
        direction: 'N',
    };

    describe('createSpacecraft', () =>
    {
        test('Should create a spacecraft with initial properties', () =>
        {
            const spacecraft = createSpacecraft(0, 0, 0, 'N');
            expect(spacecraft).toEqual(initialPosition);
        });
    });

    describe('moveForward', () =>
    {
        test('Should move spacecraft forward in the correct direction', () =>
        {
            const spacecraft = createSpacecraft(0, 0, 0, 'N');
            moveForward(spacecraft);
            expect(spacecraft).toEqual({ ...initialPosition, y: 1 });
        });
    });

    describe('moveBackward', () =>
    {
        test('Should move spacecraft backward in the correct direction', () =>
        {
            const spacecraft = createSpacecraft(0, 0, 0, 'N');
            moveBackward(spacecraft);
            expect(spacecraft).toEqual({ ...initialPosition, y: -1 });
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
        test('Should execute commands provided in array and return final state', () =>
        {
            const commands = ['f', 'r', 'u', 'b', 'l'];
            const finalState = executeCommands(commands, initialPosition);

            expect(finalState).toEqual({
                x: 0,
                y: 1,
                z: -1,
                direction: 'N',
            });
        });

        test('Spacecraft Should not move beyond the galactic plane boundary [100, 100, 100]', () =>
        {
            const initialPosition = {
                x: 100,
                y: 0,
                z: 0,
                direction: 'E',
            };
            const commands = ['f'];

            const finalState = executeCommands(commands, initialPosition);

            expect(finalState).toEqual(initialPosition);
        });

        test('Should handle multiple rotations in different directions', () =>
        {
            const commands = ['r', 'r', 'r', 'l', 'l', 'l'];
            const finalState = executeCommands(commands, initialPosition);

            expect(finalState).toEqual(initialPosition);
        });

        test('Should execute a sequence of complex movements and rotations', () =>
        {
            const initialPosition = {
                x: 0,
                y: 0,
                z: 0,
                direction: 'N',
            };
            const commands = ['f', 'r', 'b', 'r', 'f', 'f', 'l', 'l', 'b', 'u', 'd'];
            const finalState = executeCommands(commands, initialPosition);

            expect(finalState).toEqual({
                x: -1,
                y: -2,
                z: 0,
                direction: 'Down',
            });
        });
    });

    describe('Invalid Command Handling', () =>
    {
        test('Should ignore invalid commands', () =>
        {
            const commands = ['f', 'x', 'b', 'y', 'l', 'z', 'r'];
            const finalState = executeCommands(commands, initialPosition);

            expect(finalState).toEqual(initialPosition);
        });
    });
});
