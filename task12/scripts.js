let input = document.getElementById("test");
let btn = document.querySelector("button");

btn.onclick = () => {
    let value = input.value;
    console.log(value);
    navigator.clipboard.writeText(value);
}
