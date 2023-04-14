// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/86051

function solution(numbers) {
    var answer = 0;
    // return Array.from({length : 10}, (_, i) => i).filter(v => !numbers
    //                                              .includes(v))
    //                                              .reduce((a, c) => a + c);
    for(let i = 0; i < 10; i++) {
      answer += !numbers.includes(i) ? i : 0;   
    }
    return answer;
}