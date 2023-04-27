// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181834

function solution(myString) {
    return [...myString].map(v => v.charCodeAt() < 108 ? "l" : v).join("");
}