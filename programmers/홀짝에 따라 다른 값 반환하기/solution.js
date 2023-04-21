// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181935

function solution(n) {
    let answer = 0;
    let i = n % 2;
    
    for(; i <= n; i += 2) {
        answer += i % 2 ? i : i**2;
    }

    return answer;
}

    
    // if(n % 2) {
    //     for(i = 1; i <= n; i += 2) {
    //         answer += i;
    //     }
    // } else {
    //     for(i = 2; i <= n; i += 2) {
    //         answer += i * i;
    //         }
    //     }