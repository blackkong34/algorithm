// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12954?language=javascript

function solution(x, n) {
    var answer = [];
  
    // let i = x;
    // while(answer.length !== n) {
    //     answer.push(i);
    //     i += x;
    // }
    
    // return answer;
    
    return Array(n).fill(x).map((v, idx) => v * (idx + 1))
}