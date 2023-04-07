// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12943#

function solution(num) {
    var answer = 0;
    
    while(num) {
        if(num === 1) {
            break;
        }
        else {
            num = num % 2 ? (num * 3) + 1 : num / 2;
            answer++;   
        }
      
    }
    
    return answer >= 500 ? -1 : answer;
}