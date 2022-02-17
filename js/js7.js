// 배열 중 1, 2, 3, 4, 5 중에서 3을 찾아라고 했을 때,
// 3을 찾았으면 그 이후는 굳이 찾지 않기 위해 하는 것 -> break;

let lectures = ["a", "b", "c", "d", "e"];
let topic = "c"
for (let i=0; i < lectures.length; i++) {
    if (lectures[i] == topic) {
        document.write(topic + "과목은" + (i+1) + "번째 과목입니다.");
        break;
    }
}