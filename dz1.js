function zero(operation = undefined) {
    if (operation != undefined) {
        return operation(0);
    }
    else {
        return 0;
    }
}
function one(operation = undefined) {
    if (operation != undefined) {
        return operation(1);
    }
    else {
        return 1;
    }
}
function two(operation = undefined) {
    if (operation != undefined) {
        return operation(2);
    }
    else {
        return 2;
    }
}
function three(operation = undefined) {
    if (operation != undefined) {
        return operation(3);
    }
    else {
        return 3;
    }
}
function four(operation = undefined) {
    if (operation != undefined) {
        return operation(4);
    }
    else {
        return 4;
    }
}
function five(operation = undefined) {
    if (operation != undefined) {
        return operation(5);
    }
    else {
        return 5;
    }
}
function six(operation = undefined) {
    if (operation != undefined) {
        return operation(6);
    }
    else {
        return 6;
    }
}
function seven(operation = undefined) {
    if (operation != undefined) {
        return operation(7);
    }
    else {
        return 7;
    }
}
function eight(operation = undefined) {
    if (operation != undefined) {
        return operation(8);
    }
    else {
        return 8;
    }
}
function nine(operation = undefined) {
    if (operation != undefined) {
        return operation(9);
    }
    else {
        return 9;
    }
}
 
function plus(x) {
    return (a) => {
        return a + x;
    }
}
function minus(x) {
    return (a) => {
        return a - x;
    }
}
function times(x) {
    return (a) => {
        return a * x;
    }
}
function dividedBy(x) {
    return (a) => {
        return parseInt(a / x);
    }
}
alert(seven(times(five()))); // must return 35
alert(four(plus(nine()))); // must return 13
alert(eight(minus(three()))); // must return 5
alert(six(dividedBy(two()))); // must return 3