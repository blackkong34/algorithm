// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/181943

function solution(my_string, overwrite_string, s) {
    return my_string.substr(0, s) + overwrite_string + my_string.substr(s + overwrite_string.length);
}