// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12910?language=javascript

function solution(arr, divisor) {
    var answer = [];
    for(let i of arr) {
        if(!(i % divisor)) {
            answer.push(i)
        }
    }
    return answer.length > 0 ? answer.sort((a,b) => a - b) : [-1]
}