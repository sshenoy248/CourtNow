export class CustomIterator implements Iterable<number>{
    private array: number[];
    private current = 0;
    private prev = -1;

    constructor(arr : number[]){
        this.array = arr;
    }

    [Symbol.iterator](): Iterator<number, any, any> {
        throw new Error("Method not implemented.");
    }

    next(): number{
        if(!this.hasNext()) {
            throw new Error("No more elements in the array");
        }
        this.prev = this.current;
        return this.array[this.current++]; 
    }

    hasNext(): boolean{
        return this.current<this.array.length ? true : false;
    }

    remove(){
        if(this.prev < 0){
            throw new Error("next() has not been called yet");
        }
        this.array.splice(this.prev,1);
        this.current--;
        this.prev = -1;
    }

    forEachRemaining(callback: (n: number) => void){
        while(this.hasNext()){
            callback(this.next());
        }
    }

    getArray(): number[] {
        return this.array;
    } 
}
