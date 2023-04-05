// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/87389

function solution(n) {
    var answer = 0;
    
    for(let i = 2; i <= n; i++) {
        if(n % i === 1 ) {
            answer = i;
            break;
        }
    }
    
    return answer;
}