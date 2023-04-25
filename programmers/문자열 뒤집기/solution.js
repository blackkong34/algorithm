// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181905#

function solution(my_string, s, e) {
    var reverse = '';
    for(let i = e; i >= s; i--) {
        reverse += my_string[i];
    }
    return my_string.substr(0, s) + reverse + my_string.substr(e+1);
    
}