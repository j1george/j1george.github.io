(() => {
  const materialsTable = document.getElementById('materials');

  const rows = [...materialsTable.getElementsByTagName('tr')];
  const trHead = rows[0];
  $(trHead).prepend('<th>Done</th>');
  
  for (const i in rows.slice(1, rows.length - 1)) {
    console.log(i);
    const tr = rows[i + 1];
    const children = tr.children

    if (!children.length) {
      continue;
    }

    $(tr).prepend(`<input type="checkbox" id="chk${i}" name="chk${i}" value="${children[1].innerHTML}">`)
  }

  const trTotal = rows[rows.length - 1];
  $(trTotal).prepend('<td></td>');

})();
