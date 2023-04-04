// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12901#

function solution(a, b) {
    var answer = '';
    let days = ["THU","FRI","SAT","SUN","MON","TUE","WED"];
                0, 1, 2, 3, 4, 5, 6
    let months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let sum = b;
    
    if(a === 1) sum = b;
    else {
        for(let i = 0;  i < a-1; i++) {
            sum += months[i];
        }
    }
   
    return answer = days[sum % 7]
}