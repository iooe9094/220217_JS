// document.write("<br>" + "========= for array =========" + "<br>");
// let arr = [3, 4, 5];
// for(let i=0; i < arr.length; i++) {
//     document.write(i + " "); // 배열의 인덱스 (위치)
// }
// for(let i=0; i < arr.length; i++) {
//     document.write(arr[i] + " "); // 배열의 값
// }

document.write("<br>" + "========= for in =========" + "<br>");
for (let i in arr) {
    document.write(i + " "); // 배열의 인덱스 (위치)
}
for (let i in arr) {
    document.write(arr[i] + " "); // 배열의 값
}
// 결과값으로 0 1 2 3 4 5가 나오는데, 012는 위치, 345는 값

// document.write("<br>" + "========= for / in ==========" + "<br>");
// let arr = [1, true, "javascript"]
// let result = "<table><tr>";
// for (let idx in arr) {
//     result += "<td>" + arr[idx] + "</td>";
// }
// reslut += "</tr></table>";

// document.write(result);
