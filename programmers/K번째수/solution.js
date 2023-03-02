// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
    var answer = [];
    
    for (let i = 0; i <= commands.length-1; i++) {
        var tmp = [];
        
        tmp = array
                .slice(commands[i][0]-1, commands[i][1])
                .sort((a,b) => a - b);
        
        answer[i] = tmp[commands[i][2]-1]; 
    }
        return answer;
    
    
  // return commands.map(([start, end, index]) => (
  //        array
  //           .slice(start-1, end)
  //           .sort((a,b) => a - b)[index-1]
  // ));  
 }