// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12917

function solution(s) {
    return [...s].sort((a, b) => b.charCodeAt() - a.charCodeAt()).join("");
}