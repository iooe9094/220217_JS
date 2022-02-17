window.onload = function() {

// document.write("매개변수와 인수" + "<br>")
//     function addNum(x,y,z) {
//         return x + y + z;
//     }
//     document.write(addNum(1,2,3));
//     document.write(addNum(1,2));
//     document.write(addNum(1));
//     document.write(addNum());

// document.write("<br>" + "매개변수와 인수(undefined)" + "<br>")
//     function num(x,y,z) {
//         if(x === undefined)
//         x = 0;
//         if(y === undefined)
//         y = 0;
//         if(z === undefined)
//         z = 0;
//         return x + y + z;
//     }
//     document.write(num(1,2,3));
//     document.write(num(1,2));
//     document.write(num(1));
//     document.write(num());

// document.write("<br>" + "내장함수(eval)" + "<br>" )
//     let x = 10, y = 20;
//     let a = eval("x+y");
//     let b = eval("y*3");
//     document.write(a + "<br>" + b);

// document.write("<br>" + "내장함수(isFinite)" + "<br>")
//     let x = "123";
//     let y = "문자열";
//     let z = "undefined";

//     document.write(isFinite(x));
//     document.write(isFinite(y));
//     document.write(isFinite(z));

// isFinite : 값이 '숫자' 인 것을 확인하는 것

document.write("<br>" + "내장함수 (isNaN)" + "<br>")
    
    let x = "123";
    let y = "문자열";
    let z = "undefined";

    document.write(isNaN(x));
    document.write(isNaN(y));
    document.write(isNaN(z));

// isNaN : 값이 '문자' 인 것을 확인하는 것.
}

