// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181882

function solution(arr) {
    var answer = [];
    for(let num of arr) {
        if(num >= 50 && !(num % 2)) answer.push(num/2);
        else if(num < 50 && num % 2) answer.push(num * 2);
        else answer.push(num)
    }
    return answer;
}