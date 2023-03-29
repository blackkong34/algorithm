// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120864

function solution(my_string) {
    var answer = 0;
    let re = /[a-z]/gi
    return my_string.split(re).reduce((a, c) => a + Number(c), 0)
}