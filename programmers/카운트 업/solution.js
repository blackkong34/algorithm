// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181920

function solution(start, end) {
    return Array.from({length : end - start + 1}, (_, i) => i + start);
}