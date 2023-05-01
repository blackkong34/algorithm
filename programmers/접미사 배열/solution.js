// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181909

function solution(my_string) {
    var answer = [];
    for(let i = 0; i <= my_string.length-1; i++){
        answer.push(my_string.slice(i));
    }    
    return answer.sort();
}