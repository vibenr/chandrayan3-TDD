
// create spacecraft object that contains x,y,z coordinates and direction of spacecraft
function createSpacecraft(x, y, z, direction, priorDirections)
{
    return {
        x,
        y,
        z,
        direction,
        priorDirections,
    };
}


// Define the boundaries for x, y, z direction
const boundary_x = 100;
const boundary_y = 100;
const boundary_z = 100;



// function to execute 'f'[moveForward] command 
function moveForward(spacecraft)
{

    switch (spacecraft.direction)
    {
        case 'N':
            console.log('----')
            if (spacecraft.y < boundary_y)
                spacecraft.y += 1;
            break;
        case 'S':
            if (spacecraft.y > -boundary_y)
                spacecraft.y -= 1;
            break;
        case 'E':
            if (spacecraft.x < boundary_x)
                spacecraft.x += 1;
            break;
        case 'W':
            if (spacecraft.x > -boundary_y)
                spacecraft.x -= 1;
            break;
        case 'Up':
            if (spacecraft.z < boundary_z)
                spacecraft.z += 1;
            break;
        case 'Down':
            if (spacecraft.z > -boundary_y)
                spacecraft.z -= 1;
            break;
    }
    spacecraft.priorDirections.push(spacecraft.direction)
}

// function to execute 'b'[moveBackward] command 
function moveBackward(spacecraft)
{
    switch (spacecraft.direction)
    {
        case 'N':
            if (spacecraft.y > -boundary_y)
                spacecraft.y -= 1;
            break;
        case 'S':
            if (spacecraft.y < boundary_y)
                spacecraft.y += 1;
            break;
        case 'E':
            if (spacecraft.x > -boundary_x)
                spacecraft.x -= 1;
            break;
        case 'W':
            if (spacecraft.x < boundary_x)
                spacecraft.x += 1;
            break;
        case 'Up':
            if (spacecraft.z > -boundary_z)
                spacecraft.z -= 1;
            break;
        case 'Down':
            if (spacecraft.z < boundary_z)
                spacecraft.z += 1;
            break;
    }
    spacecraft.priorDirections.push(spacecraft.direction)
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
            while (spacecraft.priorDirections[spacecraft.priorDirections.length - 1] == 'Up' || spacecraft.priorDirections[spacecraft.priorDirections.length - 1] == 'Down')
            {
                spacecraft.priorDirections.pop();
            }
            console.log(spacecraft.priorDirections)
            if (spacecraft.priorDirections[spacecraft.priorDirections.length - 1] == 'E')
                spacecraft.direction = 'N';
            if (spacecraft.priorDirections[spacecraft.priorDirections.length - 1] == 'N')
                spacecraft.direction = 'W';
            if (spacecraft.priorDirections[spacecraft.priorDirections.length - 1] == 'S')
                spacecraft.direction = 'E';
            if (spacecraft.priorDirections[spacecraft.priorDirections.length - 1] == 'W')
                spacecraft.direction = 'S';

            break;
        case 'Down':

            while (spacecraft.priorDirections[spacecraft.priorDirections.length - 1] == 'Up' && spacecraft.priorDirections[spacecraft.priorDirections.length - 1] == 'Down')
            {
                spacecraft.priorDirections.pop();
            }
            if (spacecraft.priorDirections[spacecraft.priorDirections.length - 1] == 'E')
                spacecraft.direction = 'N';
            if (spacecraft.priorDirections[spacecraft.priorDirections.length - 1] == 'N')
                spacecraft.direction = 'W';
            if (spacecraft.priorDirections[spacecraft.priorDirections.length - 1] == 'S')
                spacecraft.direction = 'E';
            if (spacecraft.priorDirections[spacecraft.priorDirections.length - 1] == 'W')
                spacecraft.direction = 'S';

            break;
    }
    spacecraft.priorDirections.push(spacecraft.direction)
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
            while (spacecraft.priorDirections[spacecraft.priorDirections.length - 1] == 'Up' || spacecraft.priorDirections[spacecraft.priorDirections.length - 1] == 'Down')
            {
                spacecraft.priorDirections.pop();
            }
            console.log(spacecraft.priorDirections)
            if (spacecraft.priorDirections[spacecraft.priorDirections.length - 1] == 'E')
                spacecraft.direction = 'S';
            if (spacecraft.priorDirections[spacecraft.priorDirections.length - 1] == 'N')
                spacecraft.direction = 'E';
            if (spacecraft.priorDirections[spacecraft.priorDirections.length - 1] == 'S')
                spacecraft.direction = 'W';
            if (spacecraft.priorDirections[spacecraft.priorDirections.length - 1] == 'W')
                spacecraft.direction = 'N';
            break;
        case 'Down':
            while (spacecraft.priorDirections[spacecraft.priorDirections.length - 1] == 'Up' || spacecraft.priorDirections[spacecraft.priorDirections.length - 1] == 'Down')
            {
                spacecraft.priorDirections.pop();
            }
            console.log(spacecraft.priorDirections)
            if (spacecraft.priorDirections[spacecraft.priorDirections.length - 1] == 'E')
                spacecraft.direction = 'S';
            if (spacecraft.priorDirections[spacecraft.priorDirections.length - 1] == 'N')
                spacecraft.direction = 'E';
            if (spacecraft.priorDirections[spacecraft.priorDirections.length - 1] == 'S')
                spacecraft.direction = 'W';
            if (spacecraft.priorDirections[spacecraft.priorDirections.length - 1] == 'W')
                spacecraft.direction = 'N';
            break;
    }
    spacecraft.priorDirections.push(spacecraft.direction)
}

// function to execute 'u'[turnUp] command 
function turnUp(spacecraft)
{
    if (spacecraft.direction !== 'Up' && spacecraft.direction !== 'Down')
    {
        // Only change direction to 'Up' if not already facing 'Up' or 'Down'
        spacecraft.direction = 'Up';
    }
    else
        spacecraft.direction = 'Up';

    spacecraft.priorDirections.push(spacecraft.direction)
}

// function to execute 'd'[turnDown] command 
function turnDown(spacecraft)
{
    if (spacecraft.direction !== 'Up' && spacecraft.direction !== 'Down')
    {
        // Only change direction to 'Down' if not already facing 'Up' or 'Down'
        spacecraft.direction = 'Down';
    }
    else
        spacecraft.direction = 'Down'

    spacecraft.priorDirections.push(spacecraft.direction)
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