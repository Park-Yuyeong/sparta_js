// 객체
// key-value pair

// 1. 객체 생성 방법
// 1-1. 기본적인 객체 생성 방법
let person = {
    name: '박유영',
    age: 25,
    gender: '여자',
}; // value 값에 어떤 자료형의 값이든 다 가능
// key에는 ''를 하지 않음

// 1-2. 생성자 함수를 이용한 객체 생성 방법
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

let person1 = new Person('홍길동', 20, '남자');
let person2 = new Person('박유영', 25, '여자');

// 2. 객체 접근 방법
console.log(person.name);
console.log(person.age);
console.log(person.gender);

// 3. 객체 메소드
// 메소드: 객체가 가진 여러가지 기능
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

// JSON.stringify : 객체를 문자열화 시킴 ( 주소값 -> 문자열 )
console.log(person === person2); // false : 두 객체의 내용물은 같아 보여도 주소값이 다름
console.log(JSON.stringify(person) === JSON.stringify(person2)); // true

// 객체 병합
let person3 = {
    name: '홍길준',
    age: '22',
};
let person4 = {
    gender: '남자',
};

let perfectMan = { ...person3, ...person4 }; // ... : spread operator
console.log(perfectMan);