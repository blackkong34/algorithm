// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181839

function solution(a, b) {
    let answer = 0;
    
    if((a * b) % 2) answer = (a**2) + (b**2); 
    else if((a + b) % 2) answer = 2 * (a + b);
    else answer = Math.abs(a - b);  
    
    return answer
}