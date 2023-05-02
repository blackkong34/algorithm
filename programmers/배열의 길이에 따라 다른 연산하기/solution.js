// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181854

function solution(arr, n) {
    let answer = [...arr];
    
    for(let i = 0; i <= arr.length-1; i++) {
        if(arr.length % 2) {
            if(!(i % 2)) answer[i] = arr[i] + n;
        }
        else {
            if(i % 2) answer[i] = arr[i] + n;
        }
    } 
    
    return answer;
}