// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181862

function solution(myStr) {
    var answer = [];
    answer = myStr.split(/[a-c]/g).filter(v => v);
    return answer.length ? answer : ["EMPTY"];
}