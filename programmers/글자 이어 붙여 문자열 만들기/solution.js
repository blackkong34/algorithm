// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181915

function solution(my_string, index_list) {
    var answer = '';
    index_list.map(v => answer += my_string[v]);
    return answer;
}