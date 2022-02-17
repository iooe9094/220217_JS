window.onload = function() {

document.write("함수의 정의" + "<br>");
function addNum(x,y) {
    // x,y는 이 함수의 매개변수임.
    document.write(x + y);
}
addNum(2,3); //실제로 함수가 실행되는 부분.

document.write("<br>" + "함수의 반환" + "<br>");
function multiNum(x,y) {
    return x + y; //x와 y를 곱한 결과를 반환.
}
let num = multiNum(3,4)
// multiNum() 함수가 호출된 후, 그 반환값이 변수 numdp 저장.
document.write(num);

document.write("<br>" + "값으로서의 함수" + "<br>")
function sqr(x) {
    return x * x;
}
let sqrNum = sqr; // 변수 sqrNum에 함수 sqr(=x * x)를 대입.
document.write(sqr(4) + "<br>");
document.write(sqrNum(4));
// sqr = sqrNum 즉, 둘 다 x * x 역할을 하므로, 값이 똑같이 나옴.
}
