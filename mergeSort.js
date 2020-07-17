let arr = [1,8,5,6,7,0,2,9]
function mergeSort (arr) {
    if (arr.length < 2) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);
    let subLeft = mergeSort(arr.slice(0, mid));
    let subRight = mergeSort(arr.slice(mid));

    return merge(subLeft, subRight);
}

function merge (left,right) {
    var result = [];
    while (left.length  && right.length){
        result.push(left[0] < right[0]? left.shift() : right.shift());
    }
    return result.concat(left.length? left : right);

}
console.log(mergeSort (arr))