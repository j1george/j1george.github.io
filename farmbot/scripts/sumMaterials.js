(() => {
  const materialsTable = document.getElementById('materials');

  const rows = [...materialsTable.getElementsByTagName('tr')];

  console.log({rows});

  let sum = 0;
  for (const tr of rows.slice(1, rows.length - 1)) {

    const children = tr.children

    if (!children.length) {
      continue;
    }

    const amt = parseInt(children[0]);

    const cost = parseInt(children[children.length - 1]);
    
    sum += cost;
  }

  const lastRowChildren = rows[rows.length - 1].children;
  lastRowChildren[lastRowChildren.length - 1].innerHTML = sum;

})();
