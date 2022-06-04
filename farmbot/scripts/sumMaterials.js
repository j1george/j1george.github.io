(() => {
  const materialsTable = document.getElementById('materials');

  const rows = materialsTable.getElementsByTagName('tr');

  console.log({rows});

  for (const tr of rows) {
    console.log({tr, children: tr.children, tagName: tr.tagName})
    if (!tr.children.length || tr.children[0].tagName !== 'td') {
      continue;
    }
    console.log(tr.children);
  }

})();
