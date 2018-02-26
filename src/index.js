class Sorter {
  constructor() {
    // your implementation
    this.array=[];
    this.compare=function(a,b){
      return a-b;
    };
  }

  add(element) {
    // your implementation
    this.array.push(element);
  }

  at(index) {
    // your implementation
    return this.array[index];
  }

  get length() {
    // your implementation
    return this.array.length;
  }

  toArray() {
    // your implementation
    return this.array;
  }

  sort(indices) {
    let sortedArr=[];
    indices.sort((a,b)=>a-b);
    for(let i=0;i<indices.length;i++){
      sortedArr.push(this.array[indices[i]]);
    }
    sortedArr.sort(this.compare);
    for(let i=0;i<indices.length;i++){
      this.array[indices[i]]=sortedArr.shift();
    }
  }

  setComparator(compareFunction) {
    // your implementation
    this.compare=compareFunction;
  }
}

module.exports = Sorter;