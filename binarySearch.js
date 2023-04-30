const binarySearch = function(sortArray,key){
    let left = 0
    let right =sortArray.length -1
    while(left <= right) {

    let middleIndex = Math.floor((left + right)/2)
    let middleIndexVlue = sortArray[middleIndex]

     if(middleIndexVlue === key){
        return middleIndex
     } else if(middleIndexVlue < key){
       return left = middleIndex + 1
     }else if(middleIndexVlue > key){
        return right = middleIndex - 1
      }
    }
    return -1;
}
console.log(binarySearch([2,3,4,6,8],6))
