// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181908

function solution(my_string, is_suffix) {
    var answer = 0;
    
    for(let i = 0; i <= my_string.length-1; i++) {
        if(is_suffix === my_string.substr(i)) {
            answer = 1; 
            break;
        }
    }
    
    return answer;
}