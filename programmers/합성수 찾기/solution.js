// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120846

function solution(n) {
    // var answer = 0;
    //    for(let i = 4; i <= n; i++) {
    //        let divisor = 0;
    //        for (let j = 1; j <= i; j++) {
    //           divisor += (i % j === 0); 
    //        }
    //        answer += (divisor >= 3);
    //    }
    //     return answer
    
    let arr = Array(n+1).fill(1).fill(0,0,2)
    
    for(let i = 2; i <= Math.sqrt(n); i++) {
        if (arr[i]) {
            for (let j = i+i; j <= n; j+=i){
                arr[j] = 0;
            }
        } 
     }
    return arr.filter(v => !v).length-2
}