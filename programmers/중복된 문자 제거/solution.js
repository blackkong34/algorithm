// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120888

function solution(my_string) {
    var answer = [...new Set(my_string)];
    return answer.join(""); 
}