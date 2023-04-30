// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120923#qna

function solution(num, total) {
    let start = Math.ceil(Math.round(total / num) - num / 2);
    return Array.from({length : num}, (_, i) => i + start);
}