// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181928

function solution(num_list) {
    let odd = "";
    let even = "";
    num_list.map(num => num % 2 ? odd += num : even += num, "");
    return Number(odd) + Number(even);
}