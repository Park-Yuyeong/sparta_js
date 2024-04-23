// 2주차
function solution(strings, n) {
    let i  = 0;

    strings.forEach(str => {
        strings[i] = str[n] + str
        i++;
    });

    strings.sort();
    i = 0;

    strings.forEach(str => {
        strings[i] = str.slice(1, str.length);
        i++;
    });

    return strings;
}

console.log(solution(["sun", "bed", "car"], 1));
console.log(solution(["abce", "abcd", "cdx"], 2));