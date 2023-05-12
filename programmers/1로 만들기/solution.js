// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181880

function solution(num_list) {
    var answer = 0;
    for(let i = 0; i <= num_list.length-1; i++) {
        let num = num_list[i];
        while(num >= 2) {
            num = Math.trunc(num / 2);
            answer++;
        }
    }
    return answer;
}