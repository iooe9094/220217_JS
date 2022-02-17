// 연습문제
// 함수로 만들어 홀수면 "odd" 짝수면 "even"을 출력하는 프로그램을 작성하세요.

window.onload = function() {
    // function test() {
    //     let num = prompt("숫자를 입력하세요.");
    //     let result = " ";
    //     if (num % 2 == 0) {
    //         result = "even(짝수)";
    //     }
    //     else {
    //         result = "odd(홀수)";
    //     }
    //     return result;
    // }
    // document.write(test());
    function test() {
        let num = prompt();
            for (i=1; i<4; i++) {
                document.write(i + "<br>");
            }
        }
    alert(test());
}