// 클로저(Closure)
// 함수가 선언된 렉시컬 환경 -> 함수가 선언될 당시의 외부 변수 등의 정보

const x = 1;

function outerFunc() {
    const x = 10;
    function innerFunc() {
        console.log(x); // 10
    }

    innerFunc();
}

outerFunc();