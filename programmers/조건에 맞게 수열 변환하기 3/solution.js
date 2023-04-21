// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181835

function solution(arr, k) {
 return arr.map(v => k % 2 ? v * k : v + k)
}