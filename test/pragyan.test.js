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
        priorDirections: [],
    };

    describe('createSpacecraft', () =>
    {
        test('Should create a spacecraft with initial properties', () =>
        {
            priorDirections = []
            const spacecraft = createSpacecraft(0, 0, 0, 'N', priorDirections);
            expect(spacecraft).toEqual(initialPosition);
        });
    });

    describe('moveForward', () =>
    {
        test('Should move spacecraft forward in the correct direction', () =>
        {
            const spacecraft = createSpacecraft(0, 0, 0, 'N', priorDirections);
            moveForward(spacecraft);
            expect(spacecraft.y).toEqual(1);
        });
    });

    describe('moveBackward', () =>
    {
        test('Should move spacecraft backward in the correct direction', () =>
        {
            const spacecraft = createSpacecraft(0, 0, 0, 'N', priorDirections);
            moveBackward(spacecraft);
            expect(spacecraft.y).toEqual(-1);
        });
    });

    describe('turnLeft', () =>
    {
        test('Should turn spacecraft to the left', () =>
        {
            const spacecraft = createSpacecraft(0, 0, 0, 'N', priorDirections);
            turnLeft(spacecraft);
            expect(spacecraft.direction).toBe('W');
        });
    });

    describe('turnRight', () =>
    {
        test('Should turn spacecraft to the right', () =>
        {
            const spacecraft = createSpacecraft(0, 0, 0, 'N', priorDirections);
            turnRight(spacecraft);
            expect(spacecraft.direction).toBe('E');
        });
    });

    describe('turnUp', () =>
    {
        test('Should turn spacecraft upwards', () =>
        {
            const spacecraft = createSpacecraft(0, 0, 0, 'N', priorDirections);
            turnUp(spacecraft);
            expect(spacecraft.direction).toBe('Up');
        });
    });

    describe('turnDown', () =>
    {
        test('Should turn spacecraft downwards', () =>
        {
            const spacecraft = createSpacecraft(0, 0, 0, 'N', priorDirections);
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
                priorDirections: ['N', 'E', 'N']
            });
        });

        test('Spacecraft Should not move beyond the galactic plane boundary [100, 100, 100]', () =>
        {
            const initialPosition = {
                x: 100,
                y: 0,
                z: 0,
                direction: 'E',
                priorDirections: []
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
                priorDirections: [],
            };
            const commands = ['f', 'r', 'b', 'r', 'f', 'f', 'l', 'l', 'b', 'u', 'd'];
            const finalState = executeCommands(commands, initialPosition);

            expect(finalState).toEqual({
                x: -1,
                y: -2,
                z: 0,
                direction: 'Down',
                priorDirections: [

                    'N', 'E', 'E',
                    'S', 'S', 'S',
                    'E', 'N', 'N',
                    'Up', 'Down'
                ]
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
