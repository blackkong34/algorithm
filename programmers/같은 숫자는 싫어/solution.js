// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr)
{
    var answer = [];
    let tmp = '';
    for(let i = 0; i <= arr.length-1; i++) {
        if (tmp !== arr[i]) {
            answer.push(arr[i]);
            tmp = arr[i];
        }
    }
    return answer;
}