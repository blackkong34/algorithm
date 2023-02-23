// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120897

function solution(n) {
     let answer = new Set();
    
    for(let i = 1; i <= Math.sqrt(n); i++) { 
        n % i === 0 ? answer.add(i).add(n/i) : answer;
    }
    return [...answer].sort((a,b)=> a-b);

}