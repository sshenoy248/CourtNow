import { CustomIterator } from "./iterator";

const iterator = new CustomIterator([1, 2, 3, 4]);

while (iterator.hasNext()) {
  const int = iterator.next();
  if (int < 3) {
    iterator.remove();
  }
}

console.log("After removal:", iterator.getArray()); 

const iteratorTwo = new CustomIterator([1, 2, 3, 4]);

console.log("Using forEachRemaining:");
iteratorTwo.forEachRemaining((int: number) => {
    int<2 ? console.log(int + " Player Found") : console.log(int + " Players Found");
});