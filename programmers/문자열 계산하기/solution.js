// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120902

function solution(my_string) {
    var answer = new Function(`return ${my_string}`)
    return answer();
    // let asnwer = 0;
    // let arr = my_string.split(" ")
    // if(arr[1] === "+") answer = Number(arr[0]) + Number(arr[2]) 
    // else if(arr[1] === "-") answer = Number(arr[0]) - Number(arr[2])
    // return answer;
    
}