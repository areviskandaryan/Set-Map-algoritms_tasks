let setA = new Set([1, 2, 3, 4]);
let setC = new Set([3, 4, 5, 6]);
function difference(setA, setC) {
    let setDiff = new Set(setA);
    for (let key of setC.keys()) {
        if (setDiff.has(key)) {
            setDiff.delete(key);
        }
    }
    return setDiff;
}
console.log(difference(setA, setC));