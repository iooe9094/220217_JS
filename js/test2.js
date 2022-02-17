// 어떤 수 n을 입력 받아 1부터 n까지 숫자를 출력해보세요.

window.onload = function() {
    let num = prompt();

    for (let i=1; i<=num; i++) {
        document.write(i);
    }
}
