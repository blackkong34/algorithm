// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181898

function solution(arr, idx) {
    let answer = -1;
    for (let i = idx; i <= arr.length-1; i++) {
        if(arr[i]) {
            answer = i;
            break;
        }
    }
    return answer;    
}