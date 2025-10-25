"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomIterator = void 0;
var CustomIterator = /** @class */ (function () {
    function CustomIterator(arr) {
        this.current = 0;
        this.prev = -1;
        this.array = arr;
    }
    CustomIterator.prototype[Symbol.iterator] = function () {
        throw new Error("Method not implemented.");
    };
    CustomIterator.prototype.next = function () {
        if (!this.hasNext()) {
            throw new Error("No more elements in the array");
        }
        this.prev++;
        return this.array[this.current++];
    };
    CustomIterator.prototype.hasNext = function () {
        return this.current < this.array.length ? true : false;
    };
    CustomIterator.prototype.remove = function () {
        if (this.prev < 0) {
            throw new Error("next() has not been called yet");
        }
        this.array.splice(this.prev, 1);
        this.current--;
        this.prev--;
    };
    CustomIterator.prototype.forEachRemaining = function (callback) {
        while (this.hasNext()) {
            callback(this.next());
        }
    };
    CustomIterator.prototype.getArray = function () {
        return this.array;
    };
    return CustomIterator;
}());
exports.CustomIterator = CustomIterator;
