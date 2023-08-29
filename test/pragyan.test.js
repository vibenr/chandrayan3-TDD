const {
    createSpacecraft,
    moveForward,
    moveBackward,
    turnLeft,
    turnRight,
    turnUp,
    turnDown,
} = require('../src/pragyan.functions');


describe('Pragyan Listening....', () =>
{
    test('moveForward should update the y-coordinate correctly', () =>
    {
        const spacecraft = createSpacecraft(0, 0, 0, 'N');
        const newSpacecraft = moveForward(spacecraft);
        expect(newSpacecraft.y).toBe(1);
    });

})