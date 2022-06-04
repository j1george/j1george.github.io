(() => {
  const materialsTable = document.getElementById('materials');

  const rows = [...materialsTable.getElementsByTagName('tr')];

  let sum = 0;
  for (const tr of rows.slice(1, rows.length - 1)) {

    const children = tr.children

    if (!children.length) {
      continue;
    }

    const amt = parseInt(children[0].innerHTML);

    const cost = parseInt(children[children.length - 1].innerHTML.replace('$', ''));
    
    sum += amt * cost;
  }

  const lastRowChildren = rows[rows.length - 1].children;
  console.log({sum, innerhtml: lastRowChildren[lastRowChildren.length - 1].innerHTML})
  lastRowChildren[lastRowChildren.length - 1].innerHTML = sum;

})();
