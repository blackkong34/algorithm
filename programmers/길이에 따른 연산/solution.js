// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181879

function solution(num_list) {
    return num_list.reduce((a, c) => num_list.length >= 11 ? a + c : a * c);
}