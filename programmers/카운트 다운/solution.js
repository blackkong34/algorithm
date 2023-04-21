// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181899

function solution(start, end) {
    return Array.from({length : start - end + 1}, () => start--);
}