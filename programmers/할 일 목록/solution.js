// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181885

function solution(todo_list, finished) {
    return todo_list.filter((el, i) => !finished[i] )
}

    // let answer = [];
    // for(let i = 0; i <= todo_list.length-1; i++) {
    //     if(!finished[i]) {
    //         answer.push(todo_list[i]);
    //     }
    // }
    // return answer;