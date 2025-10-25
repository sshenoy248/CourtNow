# TypeScript Iterator Example

## Overview

This repository demonstrates a **Java-style iterator** implemented in TypeScript.

- **`iterator.ts`** — contains a class that takes in a `number[]` and supports the following Java Iterator functions:
    + `next` 
    + `hasNext` 
    + `remove`
    + `forEachRemaining` <br><br>
    Additionally :
    + `getArray()` helper function

- **`main.ts`** — Performs the example behavior mentioned in the requirements, with a little script embellishment for the demonstration of the 'forEachRemaining' functionality. 

## Iterator Class (`Iterator.ts`)

A Java-like iterator running over a `number[]`.

### Internal State

| Property          | Purpose                                                      |
|-------------------|--------------------------------------------------------------|
| `array: number[]` | The integer array being iterated.                            |
| `current = 0`     | Index of the next element to return.                         |
| `prev = -1`       | Index of the last returned element (used by `remove()`).     |

### Public APIs

#### `hasNext(): boolean`
Returns `true` if an element exists to be iterated (`current < array.length`).

#### `next(): number`
Returns `array[current]` and moves the cursor forward.
- Also updates `prev`.
- Throws an error if there are no more elements.

#### `remove(): void`
Removes the last element returned by `next()`.
- Can only be called after `next()` has been called once and once per returned element.
- Uses `array.splice(prev, 1)` internally.

#### `forEachRemaining(callback: (n: number) => void): void`
Calls the provided callback function for all remaining elements.

#### `getArray(): void`
Logs the iterator’s internal array contents for debugging.

---

## Build and Run Instructions

Follow these steps to compile and run the TypeScript project.


### Install Dependencies
Install all required packages using npm:

```bash
npm install
```

### Build the Project
Compile the TypeScript files into JavaScript:
```bash
npm run build
```

### Run the Program
```bash
npm start
```