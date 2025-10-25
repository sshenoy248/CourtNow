"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var iterator_ts_1 = require("./iterator.ts");
var iterator = new iterator_ts_1.CustomIterator([1, 2, 3, 4]);
while (iterator.hasNext()) {
    var int = iterator.next();
    if (int < 3) {
        iterator.remove();
    }
}
console.log("After removal:", iterator.getArray());
var iteratorTwo = new iterator_ts_1.CustomIterator([1, 2, 3, 4]);
console.log("Using forEachRemaining:");
iteratorTwo.forEachRemaining(function (int) {
    console.log(int);
});
