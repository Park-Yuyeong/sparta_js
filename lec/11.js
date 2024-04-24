// 비동기적 코드의 이해
setTimeout(function (){
    console.log('여기가 먼저 인가?');
}, 2000);

console.log('여긴가?');