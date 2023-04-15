// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
    var answer = 0; 
    for(let i = 0; i <= signs.length-1; i++) {
        signs[i] ? answer += absolutes[i] : answer -= absolutes[i] 
    }
    return answer;
}