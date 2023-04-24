// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181927

function solution(num_list) {
    let answer = [...num_list];
    let a = num_list.at(-1) - num_list.at(-2);
    
    a > 0 ? answer.push(a) : answer.push(num_list.at(-1) *2);
    
    return answer;
}