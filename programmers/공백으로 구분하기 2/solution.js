// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181868

function solution(my_string) {
    return my_string.replace(/\s+/g, " ").trim().split(" ");
}