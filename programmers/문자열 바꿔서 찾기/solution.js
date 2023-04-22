// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181864#

function solution(myString, pat) {
    return +[...myString].reduce((a, c) => a += c === "A" ? "B" : "A","").includes(pat);
}

//     let answer = "";
//     for(let ch of myString) {
//         answer += ch === "A" ? "B" : "A"; 
//     }
//     return +answer.includes(pat);

