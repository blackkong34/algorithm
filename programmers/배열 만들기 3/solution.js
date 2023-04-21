// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181895

function solution(arr, intervals) {
    return intervals.map((v, idx) => arr.slice(v[0], v[1]+1)).flat();
}