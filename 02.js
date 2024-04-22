// string type 공부

let str = 'Hello World!';

// 문자열 길이 확인: length
console.log(str.length);

// 문자열 결합하기: concat
let str1 = 'Hello, ';
let str2 = 'World!';
let result = str1.concat(str2);
console.log(result);

// 문자열 자르기
let str3 = 'Hello, World!';
console.log(str3.substr(7, 5)); // substr(시작 위치, 문자열 길이)
console.log(str3.slice(7, 12)); // slice(시작 위치, 끝 위치+1)

// 문자열 검색
// search: 검색하는 해당 문자가 시작하는 문자열의 값을 반환
console.log(str3.search('World'))
console.log(typeof (str3.search('World'))); // search returen type: number

// 문자열 대체
// replace(검색할 문자열, 대체 문자열)
let result1 = str3.replace('World', 'JavaScript');
console.log(result1);

// 문자열 분할: split(자르는 기준점)
let str4 = 'apple, banana, kiwi';
let result2 = str4.split(',');
// 출력: [ 'apple', 'banana', 'kiwi' ]
// 배열로 반환 값이 출력됨

let test1 = null;
let test2 = 'hi';
console.log(test1+test2);