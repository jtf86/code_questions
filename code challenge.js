//ping Pong
//the ping pong question with the "that's game" ending. They "should" get this, 100%
function pingpong(input) {
    for (var i = 1; i <= input; i++)  {
        if (i % 15 === 0) {
            console.log("Ping-Pong");
        } else if (i % 5 === 0) {
            console.log("Pong");
        } else if (i % 3 === 0) {
            console.log("Ping");
        } else {
            console.log(i);
        }
    }
    return "that's game";
}
//factorial
//this is an optional question, bonus points for the recursive solution
//for-loop solution
function factorial(num) {
    var result = 1;
    for (var n = 1; n <= num; n++) {
        result = result * n;
    }
    return result;
}
//recursive solution
function factorial_rec(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * factorial_rec(num - 1);
    }
}
