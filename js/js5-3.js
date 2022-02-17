window.onload = function () {
    let arr = [1, true, "javascript"]
    var result = "<table border=1><tr>";
    for (let idx in arr) {
        result += "<td>" + arr[idx] +"</td>";
    }
    result += "</tr></table>";
    // result = result + "</tr></table"

    console.log(result)
    document.write(result)

    }