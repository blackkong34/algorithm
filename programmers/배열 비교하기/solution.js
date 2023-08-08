// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181856?language=javascript

function solution(arr1, arr2) {
    
    if(arr1.length === arr2.length) {
        const ans1 = arr1.reduce((acc, cur) => acc + cur,0) 
        const ans2 = arr2.reduce((acc, cur) => acc + cur,0) 
        return ans1 > ans2 ? 1 : (ans1 < ans2) ? -1 : 0
    } return arr1.length > arr2.length ? 1 : -1  

    }
