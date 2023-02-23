// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120895

function solution(my_string, num1, num2) {
    var answer = [...my_string];

    
    // 1. 노가다
    // let str = my_string
    // return str.substring(0, num1) + str[num2] + str.substring(num1+1, num2) + str[num1] + str.substring(num2+1)
    
    //2.splice()
    answer.splice(num1, 1, my_string[num2])
    answer.splice(num2, 1, my_string[num1])            
    return answer.join("") 
    

}