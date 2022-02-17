window.onload = function () {
    let arr = [3, 4, 5];
    for (let i = 0; i < arr.length; i++) {
        document.write(i + " ");
    }
    for (let i in arr) {
        document.write(i + " ");
    }
}