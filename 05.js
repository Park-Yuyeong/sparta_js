let numbers = [1, 2, 3, 4, 5];

// 매개 변수 자리에 함수를 넣는 것 : 콜백 함수
numbers.forEach(function(item) {
    console.log(item);
});

let newNumbers = numbers.map(function(item) {  
    return item * 2; // map 함수를 사용하는 경우 반드시 reutrn 문 필요!!
});
console.log(newNumbers);

let newNumbers1 = numbers.filter(function(item) {
    return item === 5; // filter 함수도 return 문 필요
});
console.log(newNumbers1);

let result = numbers.find(function(item) {
    return item >3; // 조건에 맞는 첫번째 요소만 반환, array 형태가 아님
})
console.log(result);
console.log(typeof result); // number