// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120887

function solution(i, j, k) {
    var answer = ""
    
    for(let l = i; l <= j; l++) {
        answer += l      
    }
    return [...answer].filter(v => v.includes(k)).length
    
}