// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181901

function solution(n, k) {
    return Array.from({length : n / k}, (_,idx) => (1 + idx) * k); 
}