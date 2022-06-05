(async () => {

  const isChecked = async (id) => {
    const res = await fetch(`https://api.countapi.xyz/get/gj.farmbot.materials/${id}`, {
      method: 'GET',
      redirect: 'follow'
    })
    .then(res => res.json())
    .then(data => data.value)
    .catch(x => {
      console.log({x});
    });
    
    count = res ? res : 0;

    return count % 2 === 0;
  };

  const materialsTable = document.getElementById('materials');

  const rows = [...materialsTable.getElementsByTagName('tr')];
  const trHead = rows[0];
  $(trHead).prepend('<th>Done</th>');

  for (const i in rows.slice(1, rows.length - 1)) {
    const tr = rows[parseInt(i) + 1];
    const children = tr.children

    if (!children.length) {
      continue;
    }

    const id = `chk${i}`
    $(tr).prepend(`<td><input type="checkbox" id="${i}" name="${id}" value="${children[1].innerHTML}" ${await isChecked(id) ? 'checked' : ''}></td>`);
    $(`#${id}`).click(event => {
      console.log({event});
    });
  }

  const trTotal = rows[rows.length - 1];
  $(trTotal).prepend('<td></td>');

})();
