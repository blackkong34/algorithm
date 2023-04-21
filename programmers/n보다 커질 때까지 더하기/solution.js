// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181884

function solution(numbers, n) {
    // let answer = 0;
    // for(let num of numbers) {
    //     answer += num;
    //     if(answer > n) break;
    // }
    // return answer;
    
    return numbers.reduce((a, c) => a <= n ? a + c : a, 0)
    
}