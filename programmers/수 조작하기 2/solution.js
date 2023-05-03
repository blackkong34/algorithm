// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181925

function solution(numLog) {
    var answer = "";
    const log = {1 : "w", "-1" : "s", 10 : "d","-10" : "a",};
    // for(let i = 0; i < numLog.length-1; i++) {
    //     answer += log[(numLog[i+1] - numLog[i])];
    // }
    // return answer;
    
    return numLog.reduce((a, c, i) => i ? a + log[c - numLog[i-1]] : a,"");
   
}