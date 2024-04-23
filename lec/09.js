// setInterval : 반복해서 매개변수로 받은 콜백함수의 로직을 수행
let count = 0;

var timer = setInterval(function(){
    console.log(count);
    if (++count > 4)    clearInterval(timer);
}, 300); // 호출 주체와 제어권 모두 setInterval


let newArr = [10, 20, 30].map(function(currentValue, index){
    console.log(currentValue, index);
    return currentValue + 5;
});

console.log(newArr);