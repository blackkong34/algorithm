// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12916#

function solution(s){
    var answer = true;
    s = [...s.toLowerCase()];
    let hasP = s.filter(v => v.includes("p"));
    let hasY = s.filter(v => v.includes("y"));
    answer = (hasP.length === hasY.length)
  

    

    return answer;
}