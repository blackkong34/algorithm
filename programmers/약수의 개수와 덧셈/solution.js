// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/77884?language=javascript

function solution(left, right) {
    var answer = 0;
//     let divisor = 0;
//     for(let i = left; i <= right; i++) {
//         for(let j = 1; j <= Math.sqrt(i); j++) {
//             if(Math.pow(j, 2) !== i) {
//                 i % j ? divisor : divisor += 2;
//             } else i % j ? divisor : divisor++;        
//         }
//         divisor % 2 ? answer -= i : answer += i;
//         divisor = 0;
//     }
//     return answer;
// }

      for(let i = left; i <= right; i++) {
        answer += Math.sqrt(i) % 1 ? i: -i
    }
    return answer;
}