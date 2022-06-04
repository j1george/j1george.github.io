(() => {
  const materialsTable = document.getElementById('materials');

  const rows = materialsTable.getElementsByTagName('tr');

  console.log({rows});

  for (const tr of rows) {
    if (!tr.hasChildNodes || tr.children[0].tagName !== 'td') {
      continue;
    }
    console.log(tr.children);
  }

})();
