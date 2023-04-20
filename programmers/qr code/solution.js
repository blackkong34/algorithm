// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181903

function solution(q, r, code) {
    var answer = '';
    [...code].map((v, idx) => idx % q === r ? answer += v : answer)
    return answer;
}