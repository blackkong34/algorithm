// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181873#

function solution(my_string, alp) {
    let re = new RegExp(alp, "g");
    return my_string.replace(re, alp.toUpperCase());
}