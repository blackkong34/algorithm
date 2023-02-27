// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120880

function solution(numlist, n) {
    var answer = [];
    return numlist.sort((a,b) => Math.abs(n-a) - Math.abs(n-b) || b - a)
    return answer;
}