// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181853

function solution(num_list) {
    return num_list.sort((a, b) => a - b).splice(0, 5)
}