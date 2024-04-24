// map 함수 직접 구형해보기
Array.prototype.map123 = function (callback, thisArg) {
    // map 함수에서 return할 결과 배열
    let mappedArr = [];

    for (let i=0; i<this.length; i++) { // this는 [1, 2, 3] -> this.length === 3
        let mappedValue = callback.call(thisArg || global, this[i]);
        mappedArr[i] = mappedValue;
    }

    return mappedArr;
};

let newArr = [1, 2, 3].map123(function(number) {
    return number * 2;
});

console.log(newArr);