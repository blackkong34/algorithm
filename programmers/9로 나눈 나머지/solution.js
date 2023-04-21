// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181914

function solution(number) {
   return [...number].reduce((a, c) => a + 1 * c, 0) % 9;
}