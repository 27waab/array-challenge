let input = document.getElementById("name"),
    addBtn = document.getElementById("add"),
    deleteBtn = document.getElementById("delete"),
    area = document.getElementById("area");

let arrOfNames = [];

addBtn.addEventListener("click", () => {
    if (input.value !== "") {
        arrOfNames.push(input.value);
        area.innerHTML = arrOfNames;
        input.value = "";
}
});

deleteBtn.addEventListener("click", () => {
    arrOfNames.pop();
    area.innerHTML = arrOfNames;
})