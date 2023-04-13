// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120860

function solution(dots) {
    let vertical = [];
    let horizon = [];
    
    for(let num of dots) {
        vertical.push(num[0]);
        horizon.push(num[1]);
    }
    return (Math.max(...vertical) - Math.min(...vertical)) * (Math.max(...horizon) - Math.min(...horizon)); 
}