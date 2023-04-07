// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12948

function solution(phone_number) {
    var answer = '';
    
    // for(let i = 0; i < phone_number.length; i++) {
    //    answer += i < phone_number.length - 4 ? "*" : phone_number[i];
    // }
    // return answer;
    
    phone_number = [...phone_number];
    let length = phone_number.length - 4;
    let removed = phone_number.splice(0, length, "*".repeat(length))
    return phone_number.join("")
}