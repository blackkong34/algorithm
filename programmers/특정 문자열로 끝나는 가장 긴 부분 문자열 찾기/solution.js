// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181872

function solution(myString, pat) {
    let end = myString.lastIndexOf(pat) + pat.length; 
    return myString.substring(0, end)
}