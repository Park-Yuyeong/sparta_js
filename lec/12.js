// Promise
// 비동기적 작업이 완료 될 떄 resolve or reject를 호출

new Promise(function (resolve) {
    setTimeout(function () {
        let name = '에스프레소';
        console.log(name);
        resolve(name);
    }, 500);
}).then(function (prevName){
    return new Promise(function (resolve) {
        setTimeout(function () {
            let name = prevName + ', 아메리카노';
            console.log(name);
            resolve(name);
        }, 500);
    });
});

// 반복되는 부분 함수화

let addCoffee = function (name) {
    return function (prevName){
        return new Promise(function (resolve) {
            setTimeout(function () {
                let newName = prevName ? prevName + ', ' + name : name;
                console.log(newName);
                resolve(newName);
            }, 500);
        });
    };
};

addCoffee('에스프레소')()
    .then(addCoffee('아메리카노'))
    .then(addCoffee('카페모카'))
    .then(addCoffee('카페라뗴'));