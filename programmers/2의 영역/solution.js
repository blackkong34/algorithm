// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181894#

function solution(arr) {
    let start = arr.indexOf(2);
    let end = arr.lastIndexOf(2) + 1; 
    return arr.slice(start, end).length ? arr.slice(start, end) : [-1];
}