// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181861

function solution(arr) {
    var answer = [];
    for(let i = 0; i <= arr.length-1; i++) {
        for(let j = 1; j <= arr[i]; j++) {
            answer.push(arr[i]);
        }
    }
    return answer;
}