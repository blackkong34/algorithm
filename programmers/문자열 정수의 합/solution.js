// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181849

function solution(num_str) {
    // let answer = 0;
    // for(let num of num_str) {
    //     answer += +num;
    // }
    // return answer;
    return [...num_str].reduce((a, c) => a + 1*c,0);
}