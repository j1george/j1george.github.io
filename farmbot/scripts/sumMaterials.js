const materialsTable = document.getElementById('materials');

const rows = materialsTable.getElementsByTagName('tr');

console.log({rows});

for (const tr of rows) {
  console.log(tr.children);
}
