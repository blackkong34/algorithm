// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181942

function solution(str1, str2) {
    return [...str1].map((v, i) => v + str2[i]).join("");
}
    // var answer = '';
    // for(let i = 0; i <= str1.length-1; i++) {
    //     answer += str1[i] + str2[i]
    // }
    // return answer;