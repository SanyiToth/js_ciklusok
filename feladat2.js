let num = Number.parseInt(window.prompt("Adj meg egy tetszőleges számot!"));
let count = true;
for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        count = false;
    }
}
if (count) {
    window.alert("Ez egy prímszám.");
} else {
    window.alert("Ez nem egy primszám.");
}





