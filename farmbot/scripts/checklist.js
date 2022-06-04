(() => {
  const materialsTable = document.getElementById('materials');

  const rows = [...materialsTable.getElementsByTagName('tr')];

  for (const tr of rows.slice(1, rows.length - 1)) {

    const children = tr.children

    if (!children.length) {
      continue;
    }

    $(tr).prepend('<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">')
  }

})();
