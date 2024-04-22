// 화살표 함수
// ES6 신 문법

// 가장 기본적인 화살표 함수 형태 
// 기본 문법은 일반 함수와 똑같음!
let arrowFunc01 = (x, y) => {
    return x + y;
}

// 한 줄 형태의 화살표 함수
// {}안의 로직이 한 줄이면 return문 없이 한 줄 형태로 사용 가능
let arrowFunc02 = (x, y) => x + y;



// 조건부 실행
let x = 10;

if (x > 0) {
    console.log('x는 양수입니다');
}

// and 조건(&&)
// 위의 조건문을 아래처럼 and 조건부 실행을 사용해 더 간단히 코드를 짤 수 있다
(x > 0) && console.log('x는 양수입니다')

// or 조건(||)
let y; // y는 현재 undefined
let z = y || 20; // y값이 undefined이면 z값에 20을 할당해라

console.log(z);