// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181865

function solution(binomial) {
    var answer = 0;
    const [a, sign, b] = binomial.split(" ");
    
    switch(sign) {
        case "+":
            answer = +a + +b;
            break;
        case "-":
            answer = +a - +b; 
            break;
        case "*":
            answer = +a * +b;
    }
    return answer;
}

    // return eval(binomial);