// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181911

function solution(my_strings, parts) {
    return parts.map((v, i) => my_strings[i].substring(v[0], v[1]+1)).join("")
}