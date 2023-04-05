// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12954

function solution(x, n) {
    var answer = [];
  
    let i = x;
    while(answer.length !== n) {
        answer.push(i);
        i += x;
    }
    
    return answer;
}