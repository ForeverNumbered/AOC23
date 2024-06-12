const table = document.getElementById("displayTable");

function htmlLog(input) {
    const trElem = document.createElement("tr");
    const tdElem = document.createElement("td");
    tdElem.innerText = input;
    trElem.appendChild(tdElem);
    table.appendChild(trElem);
};