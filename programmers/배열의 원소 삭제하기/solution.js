// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181844

function solution(arr, delete_list) {
    return arr.filter(el => !delete_list.includes(el)); 
}