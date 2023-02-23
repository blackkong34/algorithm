// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120890#

function solution(array, n) {
    var answer = 0;
    let min = Math.min(...array.map(v => Math.abs(v-n)))
    answer = array.filter(v => Math.abs(v-n) === min)
    return Math.min(...answer)
//     정렬하고 양옆에 숫자랑 비교...
    // let arr = [...array, n].sort((a, b) => a - b)
    // let idx = arr.findIndex(v => v === n)
    // return Math.abs((arr[idx] - arr[idx+1])) > Math.abs((arr[idx] - arr[idx-1])) 
    //         ? arr[idx-1]||arr[idx+1] 
    //         : arr[idx+1]||arr[idx-1]; 
    
}