// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181870

function solution(strArr) {
    return strArr.filter(el => !el.includes("ad"));
}