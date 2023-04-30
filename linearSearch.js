//searching algorithms
const linearSearch = function(array, key) {

    for(let i = 0; i<array.length; i++) {
        if(array[i] === key) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([2,4,5,6], 5))