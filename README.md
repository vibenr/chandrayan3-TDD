
# Chandrayaan 3 TDD Assessment

- This repository contains well-written code for the online Assessment of Incubyte. 
- The followed approach here is Test Driven Development (TDD).
- In this project, the TDD methodology was employed using the Jest testing framework, ensuring that each component's functionality was thoroughly tested through a comprehensive suite of automated tests.
- It can be reffered as "unit testing" with Jest for your spacecraft navigation functions.




## Aim
- The task is to design the program that enables Chandrayaan 3 to execute given commands accurately and efficiently in the vast expanse of the galaxy:
- please refer Usage/Examples section for sample input/output.
## Run Locally

Clone the project

```bash
  git clone https://github.com/vibenr/chandrayan3-TDD 
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

To examine given example, run the following command

```bash
  npm run start
```


## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Screenshots

![test_screenshot](./public/jest-test.png)


## Tools & Programming Language

**Testing Framework:** Jest

**Programming Language:** Javascript


## Usage/Examples

Given the starting point (0, 0, 0) following (x, y, z) and initial direction N, the following commands should result in the indicated final position and direction:

*Commands*: [“f”, “r”, “u”, “b”, “l”]

*Starting Position*: (0, 0, 0)

*Initial Direction*: N

“f” - (0, 1, 0) - N
“r” - (0, 1, 0) - E
“u” - (0, 1, 0) - U
“b” - (0, 1, -1) - U
“l” - (0, 1, -1) - N

*Final Position*: (0, 1, -1)

*Final Direction*: N

