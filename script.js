function createTable() {
const rowcount = parseInt(prompt("Input number of rows"));
const colcounts = parseInt(prompt("Input number of columns"));
const display  = document.querySelector("input");
display.className = "input";
const table = document.getElementById("myTable");
for(let i=0;i<rowcount;i++){
  const row = document.createElement("tr");
  for(let j=0;j<colcounts;j++){
    const col = document.createElement("td");
    col.innerText = `Row-${i} Column-${j}`;
    row.append(col);
    table.append(row);
  }
}


}
