// 연습문제 1
// 함수의 반환값을 이용해서 아래를 출력하는 프로그램을 제작하세요.
// 값 1이 입력되면 "hello", 값 2가 입력되면 "world" 출력

window.onload = function() {
//     function test() {
//     let num = prompt("값을 입력하세요.");
//     let result = " ";
//     if (num==1) {
//         result = "hello";
//     }
//     else {
//         if (num==2) {
//             result = "world";
//         }
//     else {
//         result = "none";
//     }
//     }
//     return result;
//     }
// document.write(test());
// }

// 연습문제 2
// 함수의 반환값을 이용해서 아래를 출력하는 프로그램을 제작하세요.
// 0이 입력되면 "false" 그 외에는 "true" 출력

// function test2() {
//     let num = prompt();
//     let result = " ";
//         if (num == 0) {
//             result = "false(0)";
//         }
//         else {
//             result = "true(!=0)";
//         }
//         return result;
//     }
//     alert(test2());
// }

// 연습문제 3
// 함수의 반환값을 이용해서 아래를 출력하는 프로그램을 제작하세요.
// 1부터 n까지의 정수합을 출력해 보세요.
// 힌트 : let num = Number(prompt("숫자를 입력하세요"))

function test3() {
    let num = Number(prompt("숫자를 입력하세요"));
    let result = 0;
    for (let i=0;i<=num; i++) {
        result +=i;

    }
    return result;
}
document.write(test3());
}

