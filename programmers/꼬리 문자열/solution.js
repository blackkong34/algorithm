// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181841

function solution(str_list, ex) {
    return str_list.filter(el => !el.includes(ex)).join("");
}