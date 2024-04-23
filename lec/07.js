// Map, Set
// 현실 세계 반영을 용이하게 하기 위한 비교적 최근에 등장한 추가적인 자료구조
// 자료구조 : 데이터들의 형태
// Map, Set의 목적 : 데이터의 구성, 검색, 사용을 효율적으로 처리 

// 1. Map
// key-value pair
// 객체와 달리 key에 어떤 데이터타입도 다 들어올 수 있다.
// Map은 키가 정렬된 순서로 저장되기 때문이다.
// 기능: 검색, 삭제, 제거, 여부 확인

const myMap = new Map();

// Map에 값을 추가하는 방법
// 형식 : myMap.set('key', 'value');

// Map 검색하는 방법
// 형식 : myMap.get('key');

// Map에서 반복을 위한 method
// keys, values, entries -> iterator 사용

myMap.set('one', 1);
myMap.set('two', 2);
myMap.set('three', 3);

for (const key of myMap.keys()) {
    console.log(key);
}

// Map 크기 확인
console.log(myMap.size);

// 특정 키가 존재하는 지 확인 
console.log(myMap.has('two')); // key 기반 검색

// 2. Set
// 고유한 값을 저장하는 자료구조
// 값만 저장
// 기능 : 값 추가, 검색, 값 삭제, 모든 값 제거, 존재 여부 확인

const mySet = new Set();

mySet.add('value1');
mySet.add('value2');
mySet.add('value2'); // 중복 값 추가 -> 값 추가 안 됨

console.log(mySet.size);
console.log(mySet.has('value2'));