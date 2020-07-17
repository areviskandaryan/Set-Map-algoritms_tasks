let setA = new Set([1, 2, 3, 4]);
let setC = new Set([3, 4, 5, 6]);
function symmetricDifference(setA, setC) {
    let setDiff = new Set(setA);
    for (let key of setC.keys()) {
        if (setDiff.has(key)) {
            setDiff.delete(key);
        } else {
            setDiff.add(key);
        }
    }
    return setDiff;
}
console.log(symmetricDifference(setA, setC));