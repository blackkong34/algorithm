// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120850

function solution(my_string) {
    var answer = [];
    
//    1. 반복문
    for(let ch of my_string) {
        !isNaN(ch) ? answer.push(Number(ch)) : answer
    }

    return answer.sort((a,b) => a - b);

//     2. filter
//     return [...my_string].filter(v => !isNaN(v)).map(v => 1*v).sort((a,b) => a -b)
    
//     3.정규표현식 + match()    
//     let re = /[0-9]/g;
//     return my_string.match(re).map(v => 1*v).sort((a,b) => a-b)

//     4. 정규표현식 + replace()
//     let ch = /[a-z]/gi;
//     return my_string.replace(ch, "").split("").sort((a,b) => a-b).map(v=> +v)
    
}