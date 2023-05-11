// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181904

function solution(my_string, m, c) {
    var answer = '';
    for(let i = 0; i <= my_string.length-1; i += m) {
        answer += my_string.substr(i, m)[c-1];
    }
    return answer;
}