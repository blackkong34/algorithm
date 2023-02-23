// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120862

function solution(numbers) {
    
    numbers.sort((a,b) => b - a)
    
    let positive = numbers[0] * numbers[1]
    let negative = numbers.at(-1) * numbers.at(-2)
    
   return positive > negative ? positive : negative;
    
    
}