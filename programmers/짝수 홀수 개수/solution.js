// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120824

function solution(num_list) {
    let even = 0;
    let odd = 0;
    num_list.map(v => v % 2 === 0 ? even++ : odd ++)
    return [even, odd];
}