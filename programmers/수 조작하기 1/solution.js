// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181926

function solution(n, control) {
    let a = {
        "w" : +1,
        "s" : -1, 
        "d" : +10, 
        "a" : -10, 
    }
    
    for(let i = 0; i <= control.length-1; i++) {
        n += a[control[i]];
    }
    return n;
}