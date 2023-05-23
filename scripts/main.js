// Greet on enter

window.onload = function greet() {
    let greets = [
        "Zdravo!",
        "Pozdrav!",
        "Hej!"
    ];
    let rand = greets[Math.floor(Math.random() * greets.length)];
    let element = document.getElementById("pozdrav");
    element.innerHTML = `👋 ${rand}`
};
// social media handles
const instagram = () => {
    var link = "https://www.instagram.com/lukicjovan6/";
    window.open(link);
};
const discord = () => {
    var text = "astral#7180"
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
};
const github = () => {
    var link = "https://github.com/astral0002";
    window.open(link);
};