// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12925#

function solution(s) {
    var answer = "";
    
    for(let i = 0; i <= s.length-1; i++) {
       answer += s[i] === "-" ? "-" : s[i];
    }
    
    return Number(answer);
    // return Number(s.valueOf())
}