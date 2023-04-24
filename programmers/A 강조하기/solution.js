// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181874#

function solution(myString) {
    return [...myString].map(v => v === "a" || v === "A" ? "A" : v.toLowerCase()).join("");
}