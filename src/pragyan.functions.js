
// create spacecraft object that contains x,y,z coordinates and direction of spacecraft
function createSpacecraft(x, y, z, direction)
{
    return {
        x,
        y,
        z,
        direction,
    };
}

// function to execute 'f'[moveForward] command 
function moveForward(spacecraft)
{
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

// function to execute 'b'[moveBackward] command 
function moveBackward(spacecraft)
{
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

// function to execute 'l'[turnLeft] command 
function turnLeft(spacecraft)
{
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
            spacecraft.direction = 'N';
            break;
        case 'Down':
            spacecraft.direction = 'S';
            break;
    }
}

// function to execute 'r'[turnRight] command 
function turnRight(spacecraft)
{
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
            spacecraft.direction = 'S';
            break;
        case 'Down':
            spacecraft.direction = 'N';
            break;
    }
}

// function to execute 'u'[turnUp] command 
function turnUp(spacecraft)
{
    switch (spacecraft.direction)
    {
        case 'N':
            spacecraft.direction = 'Up';
            break;
        case 'S':
            spacecraft.direction = 'Up';
            break;
        case 'E':
            spacecraft.direction = 'Up';
            break;
        case 'W':
            spacecraft.direction = 'Up';
            break;
        case 'Up':
            break;
        case 'Down':
            spacecraft.direction = 'Up';
            break;
    }
}

// function to execute 'd'[turnDown] command 
function turnDown(spacecraft)
{
    switch (spacecraft.direction)
    {
        case 'N':
            spacecraft.direction = 'Down';
            break;
        case 'S':
            spacecraft.direction = 'Down';
            break;
        case 'E':
            spacecraft.direction = 'Down';
            break;
        case 'W':
            spacecraft.direction = 'Down';
            break;
        case 'Up':
            spacecraft.direction = 'Down';
            break;
        case 'Down':
            break;
    }
}


// function to execute all the commands transmitted by scientist at ISRO
function executeCommands(commands, initialPosition)
{
    const spacecraft = initialPosition;

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