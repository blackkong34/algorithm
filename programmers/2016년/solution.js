// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12901?language=javascript

function solution(a, b) {
//     let days = ["THU","FRI","SAT","SUN","MON","TUE","WED"];
//     let months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     let sum = b;

//     for(let i = 0;  i < a-1; i++) {
//         sum += months[i];
//     }

//     return days[sum % 7];
    
    var date = new Date(2016, a-1, b);
    return date.toString().slice(0,3).toUpperCase();
}