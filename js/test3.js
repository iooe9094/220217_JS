// 도전과제
// 어떤 두 수 a와 b가 있을 때 두 수 사이의 모든 정수(홀수)를 순서대로 출력해 보세요
// 입력 : 3
// 입력 : 8
// 출력 : 3 4 5 6 7 8
// 즉, 첫번째 값이 3부터 마지막 값이 8이 되어야 함

// window.onload = function() {
//     document.write("3번문제")
//     let a = prompt ("첫번 째 숫자를 입력하세요.")
//     let b = prompt ("두번 째 숫자를 입력하세요.")

//     for(let i=a;i<=b;i++)
//             document.write(i);
//         }
//     }
// }

window.onload = function() {
    document.write("4번문제")
    let a = prompt ("첫번 째 숫자를 입력하세요.")
    let b = prompt ("두번 째 숫자를 입력하세요.")

    for (let i=a; i<=b; i++)
        if (i % 2 == 1) {
            document.write(i);
        }
}
