### Prompt

Implement a Java Iterator in the language of your choosing without using a built-in iterator.

### Documentation

[Here's a link to the iterator documentation](https://docs.oracle.com/javase/8/docs/api/java/util/Iterator.html)

### Some clarifying points

- When instantiating an iterator, pass in an array of integers as an argument rather than making the iterator a method for a list or a hash table.
- Make forEachRemaining take any callback rather than strictly adhering to the function signature in the documentation.

Example behavior in JavaScript:

```jsx
const iterator = new Iterator([1, 2, 3, 4])

while (iterator.hasNext()) {
  const int = iterator.next()
  if (int < 3) {
    iterator.remove()
  }
}

// at this point, the iterator should have two items: 3 and 4

const iteratorTwo = new Iterator([1, 2, 3, 4])

// this should print each item of the array passed in
iteratorTwo.forEachRemaining((int) => {
  console.log(int)
})
```

### Evaluation Criteria

- **Correctness**: Methods behave per spec.
- **Clarity**: Readable methods. Minimal cognitive load.
- **Tests**: Coverage of edge cases. Clear assertions.

### Time Box

Aim for **2 hours**. If you go over, pause and document what you would do next in the README.md.

### Submission

- Share a GitHub repo link. Include brief notes on environment and run commands in.
- Document your approach and implementation details in a README.md.