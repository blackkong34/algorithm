// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181871

function solution(myString, pat) {
    var answer = [];
    
    for(let i = 0; i <= myString.length-1; i++){
       if(myString.indexOf(pat, i) !== -1) answer.push(myString.indexOf(pat, i)); 
    }
    
    return [...new Set(answer)].length;
}