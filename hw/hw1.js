// 1. 문자열 연습하기
function solution(s) {
    let s_arr = [ ...s ];

    let p  = s_arr.filter(function (item) {
        return (item === 'p' || item === 'P');
    });
    let y = s_arr.filter(function (item) {
        return (item === 'y' || item === 'Y');
    });

    let p_len = p.length;
    let y_len = y.length;
    console.log(p_len, y_len);
    return console.log(p_len === y_len);
}

solution("pPoooyY");
solution("Pyy");