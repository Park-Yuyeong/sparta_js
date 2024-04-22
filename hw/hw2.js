// 2. 반복문, 조건문 연습하기
function solution(absolutes, signs) {
    let result = 0;
    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i] === true){
            result += absolutes[i];
        } else {
            result -= absolutes[i];
        }
    }

    return console.log(result);
}

solution([4,7,12], [true,false,true]);