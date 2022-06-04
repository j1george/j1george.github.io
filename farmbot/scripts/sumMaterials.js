(() => {
  const materialsTable = document.getElementById('materials');

  const rows = [...materialsTable.getElementsByTagName('tr')];

  console.log({rows});

  let sum = 0;
  for (const tr of rows.slice(1, rows.length - 1)) {
    if (!tr.children.length) {
      continue;
    }
    console.log(tr.children[0].innerHTML);
  }

})();
