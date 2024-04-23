// 얕은 복사
let copyObject = function (target) {
    let result = {};
    
    // for ~ in : 객체의 모든 property에 접근하는 방법
    // 하드코딩을 하지 않아도 되게 만들어 줌
    // copyObject를 통해 복사를 한 다음, 복사를 완료한 객체의 속상값을 변경하면 됨 
    for (let prop in target) {
        result[prop] = target[prop];
    }
    return result;
};

// 얕은 복사의 단점
// 중첩된 객체에 대해서는 완벽한 복사가 불가능

 // 깊은 복사
 // 재귀적 수행 recursive
 let copyObjectDeep = function(target) {
    let result = {};
    if (typeof target === 'object' && target !== null) {
        for (let prop in target) {
            result[prop] = copyObjectDeep(target[prop]); // recursive
        }
    } else {
        result = target;
    }
    return result;
 }