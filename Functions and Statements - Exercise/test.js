function fun1(a) {
    function fun2(b) {
        return a + b;
    }
    return fun2;
}
function GFG_Fun() {
    console.log(fun1("A Online Computer Science Portal")
        (" GeeksforGeeks"));
}


function test(){
    console.log(fun1("NEshto")("neshto"))
}
GFG_Fun()
test();