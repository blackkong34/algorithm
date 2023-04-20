// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120894

function solution(numbers) {
    var answer = 0;
    let nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven','eight','nine']
 
    for(let i = 0; i <= nums.length-1; i++) {
        numbers = numbers.replaceAll(nums[i],i)
    }
    
    return 1 * numbers;
}
