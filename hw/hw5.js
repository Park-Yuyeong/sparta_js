// 3-2. 어떤 매치가 성사될까?
var fullname = 'Ciryl Gane'

var fighter = {
    fullname: 'John Jones',
    opponent: {
        fullname: 'Francis Ngannou',
        getFullname: function () {
            return this.fullname;
        }
    },

    getName: function() {
        return this.fullname;
    },

    getFirstName: () => { // 화살표 함수
        return this.fullname.split(' ')[0];
    },

    getLastName: (function() {
        return this.fullname.split(' ')[1];
    })()

}

console.log('Not', fighter.opponent.getFullname(), 'VS', fighter.getName());
console.log('It is', fighter.getName(), 'VS', fighter.getFirstName(), fighter.getLastName);

// fighter.opponent.getFullname() : this는 fighter.opponent 객체를 가리킴. 따라서 this.fullname은 'Francis Ngannou'
// fighter.getName() : this는 fighter 객체를 가리킴. 따라서 this.fullname은 'John Jones'
// fighter.getFirstName() : 화살표 함수는 this binding을 하지 않음. this는 전역 객체를 가리킴. 따라서 this.fullname.split(' ')[0]은 'Ciryl'
// fighter.getLastName() : getLastName key에 할당된 밸류가 괄호가 쳐져있는 함수로, 이는 getLastName의 메서드가 아닌 스스로가 호출의 주체가 되는 함수라고 볼 수 있다. 함수의 this는 전역 객체이므로 this.fullname.split(' ')[1]은 'Gane'