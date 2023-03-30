// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/12930#

function solution(s) {
    var answer = '';
    let cnt = 0;
    s = s.toLowerCase();
    // let re = /[a-Z]/;
    
    for(let i = 0; i <= s.length-1; i++){
        if(s[i] >= 'a' && s[i] <= 'z' && cnt % 2 === 0) {          
            answer += s[i].toUpperCase();
            cnt++
        } else if(s[i] >= 'a' && s[i] <= 'z' && cnt % 2 === 1) {
            answer += s[i].toLowerCase()
            cnt++
        } else { 
            answer += s[i];
            cnt = 0;
        }
    }
    
    return answer;
}