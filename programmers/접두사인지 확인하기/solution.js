// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181906

function solution(my_string, is_prefix) {
    return +(my_string.indexOf(is_prefix) === 0);
}