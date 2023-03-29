// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120887?language=javascript

function solution(i, j, k) {
    var answer = ""
    
    for(i; i <= j; i++) {
        answer += i      
    }
    return [...answer].filter(v => v.includes(k)).length
    
}