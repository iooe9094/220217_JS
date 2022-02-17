window.onload = function () {
    let i = 1, j = 1;
    while (i > 3) {
        // 변수 i 초기값은 1이므로 이 while 문은 실행되지 않음
        document.write("i : " + (i++) + "<br>")
        // document.write (i + "br>")
        // i++; 로 대체가능
    }
    do {
        // 변수 j의 초기값은 1이므로 이 do/while문은 1번만 실행됨
        // do/while은 최초 1번 실행 하기 때문에 do에서 1번 실행하는것
        document.write("j : " + (j++) + "<br>");
    }
    while (j > 3);
}

// 보통 while문을 사용하는데, do/while이 필요할 경우 사용.
// 잘 이해가 안가면 굳이 안써도 상관없다!