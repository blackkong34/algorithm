// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181939

function solution(a, b) {
    a = "" + a;
    b = "" + b;
    return Number(a + b) >= Number(b + a) ? Number(a + b) : Number(b + a) ;
}