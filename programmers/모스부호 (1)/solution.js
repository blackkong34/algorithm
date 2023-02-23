// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120838

function solution(letter) {
    var answer = '';
let morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
}
    
     return letter.split(" ").reduce((acc, cur) => acc += morse[cur],"")
    // let con = letter.split(" ")
    // for (let ch of con) {
    //     answer += morse[ch]
    // }
    // return answer
}