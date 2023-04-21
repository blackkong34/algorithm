// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181929

function solution(num_list) {
    let sum = 0;
    let product = 1;
    
    num_list.map(v => {
        sum += v;
        product *= v;
    });
    
    return +(Math.pow(sum, 2) > product);
}