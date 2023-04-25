// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181930

function solution(a, b, c) {
    var answer = 0;
    if(a !== b && a !== c && b !== c) answer = a + b + c;
    else if(a === b && a === c) answer = (3*a) * 3*(a**2) * 3*(a**3);
    else answer = (a + b + c) * (a**2 + b**2 + c**2); 
    return answer;
}