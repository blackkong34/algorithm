// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120907

function solution(quiz) {
    var answer = [];    
    return quiz.map(v => {
        let [q, ans] = v.split(" = ");
        return eval(q) == ans ? "O" : "X"
    })
}
