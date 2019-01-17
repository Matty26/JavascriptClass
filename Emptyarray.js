let emptyOnOne = (array) => {
    if(array[0] === 1 || array[2] ===1){
        array.pop()
        array.pop()
        array.pop()
    }
    return array
}
console.log(emptyOnOne([1, 2, 3]))