function binarySearch(sortedArray, key){
    let start = 0;
    let end = sortedArray.length - 1;
    while(end >= start){
        const middle = Math.floor((end + start)/2);
        if(sortedArray[middle] === key){
            return middle;
        }
        else if(sortedArray[middle] > key){
            end = middle - 1;
        }
        else{
            start = middle + 1;
        }
    }
    return -1;
}

const result = binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 3);
console.log(result);