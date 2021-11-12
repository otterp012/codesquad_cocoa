function solution(board, moves) {
    var answer = 0;
    let stack = [];
    let cnt = 0;
    for(let i=0; i<moves.length; i++) {
        let con = moves[i]-1;
        for(let j=0; j<board.length; j++) {
            if(board[j][con]) {
                stack.push(board[j][con]);
                board[j][con] = 0;
           if(stack[stack.length-2] === stack[stack.length-1]) {
            cnt++;
            stack.pop();
            stack.pop();
           }
           break;
       } 
    }
}
    answer = cnt*2;
    return answer;
}