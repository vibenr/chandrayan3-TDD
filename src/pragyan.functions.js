function createSpacecraft(x, y, z, direction)
{
    return {
        x,
        y,
        z,
        direction,
    };
}

function moveForward(spacecraft)
{
    // testing lines 
    console.log('forward function called')
    switch (spacecraft.direction)
    {
        case 'N':
            spacecraft.y += 1;
            break;
        case 'S':
            spacecraft.y -= 1;
            break;
        case 'E':
            spacecraft.x += 1;
            break;
        case 'W':
            spacecraft.x -= 1;
            break;
        case 'Up':
            spacecraft.z += 1;
            break;
        case 'Down':
            spacecraft.z -= 1;
            break;
    }
}

function moveBackward(spacecraft)
{
    console.log('backward function called')
    switch (spacecraft.direction)
    {
        case 'N':
            spacecraft.y -= 1;
            break;
        case 'S':
            spacecraft.y += 1;
            break;
        case 'E':
            spacecraft.x -= 1;
            break;
        case 'W':
            spacecraft.x += 1;
            break;
        case 'Up':
            spacecraft.z -= 1;
            break;
        case 'Down':
            spacecraft.z += 1;
            break;
    }
}

function turnLeft(spacecraft)
{
    console.log('turnleft function called')
    switch (spacecraft.direction)
    {
        case 'N':
            spacecraft.direction = 'W';
            break;
        case 'S':
            spacecraft.direction = 'E';
            break;
        case 'E':
            spacecraft.direction = 'N';
            break;
        case 'W':
            spacecraft.direction = 'S';
            break;
        case 'Up':
            spacecraft.direction = 'Up';
            break;
        case 'Down':
            spacecraft.direction = 'Down';
            break;
    }
}

function turnRight(spacecraft)
{
    console.log('turnRight function called')
    switch (spacecraft.direction)
    {
        case 'N':
            spacecraft.direction = 'E';
            break;
        case 'S':
            spacecraft.direction = 'W';
            break;
        case 'E':
            spacecraft.direction = 'S';
            break;
        case 'W':
            spacecraft.direction = 'N';
            break;
        case 'Up':
            spacecraft.direction = 'Up';
            break;
        case 'Down':
            spacecraft.direction = 'Down';
            break;
    }
}

function turnUp(spacecraft)
{
    console.log('turnUp function called')
    switch (spacecraft.direction)
    {
        case 'N':
            spacecraft.direction = 'Up';
            break;
        case 'S':
            spacecraft.direction = 'Down';
            break;
        case 'E':
            spacecraft.direction = 'E';
            break;
        case 'W':
            spacecraft.direction = 'W';
            break;
        case 'Up':
            spacecraft.direction = 'Up';
            break;
        case 'Down':
            spacecraft.direction = 'Down';
            break;
    }
}

function turnDown(spacecraft)
{
    console.log('turnDown function called')
    switch (spacecraft.direction)
    {
        case 'N':
            spacecraft.direction = 'Down';
            break;
        case 'S':
            spacecraft.direction = 'Up';
            break;
        case 'E':
            spacecraft.direction = 'E';
            break;
        case 'W':
            spacecraft.direction = 'W';
            break;
        case 'Up':
            spacecraft.direction = 'Up';
            break;
        case 'Down':
            spacecraft.direction = 'Down';
            break;
    }
}

function executeCommands(commands)
{
    const spacecraft = createSpacecraft(0, 0, 0, 'N');

    for (const command of commands)
    {
        switch (command)
        {
            case 'f':
                moveForward(spacecraft);
                break;
            case 'b':
                moveBackward(spacecraft);
                break;
            case 'l':
                turnLeft(spacecraft);
                break;
            case 'r':
                turnRight(spacecraft);
                break;
            case 'u':
                turnUp(spacecraft);
                break;
            case 'd':
                turnDown(spacecraft);
                break;
        }
    }

    return spacecraft;
}

module.exports = {
    createSpacecraft,
    moveForward,
    moveBackward,
    turnLeft,
    turnRight,
    turnUp,
    turnDown,
    executeCommands,
};
