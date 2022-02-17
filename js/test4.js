// function test

// window.onload = function() {
//     function hello() {
//         alert("hello world");
//     }
//     hello();
// }

// 연습문제
// 함수로 만들어서 123을 출력하는 프로그램을 작성하세요.

// window.onload = function() {
//     function num(x,y,z) {
//         document.write(x,y,z);
//     }
//     num(1,2,3);
// }
    // (위를 "함수의 정의부" 라고 합니다.)

function test1() {
    // 반환 값 있음 -> 출력값 변경에 무리 없음.
    // 또한, 출력값 사용에 제한이 없으므로 함수 추가 안해줘도 됨.
    let result = "123"
    return result;
}
alert(test1());

function test2() {
    // 반환 값 없음 -> 출력값 사용하려는 것 일일이 찾아 써야함.
    // 또한, 출력값을 두개 사용하려면 함수값을 두개 만들어야 함.
    document.write("123");
}
alert(test2());
// 함수의 호출

// 연습문제2
// 함수로 만들어 홀수면 "odd" 짝수면 "even"을 출력하는 프로그램을 작성하세요.

// window.onload = function() {
    
//     function a() {
//         let num = prompt("숫자를 입력하세요.");
//         let result = "";
//             if (num%2==0) {
//                 result = "even";
//         }
//             else {
//                 result = "odd";
//         }
//             return result;
//     }
//     document.write(a());
    // (위를 "함수의 실행부" 라고 합니다.)
// }
