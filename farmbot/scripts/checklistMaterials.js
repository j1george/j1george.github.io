(async function() {

  const hit = async (id) => {
    const res = await fetch(`https://api.countapi.xyz/hit/gj.farmbot.materials/${id}`, {
      method: 'GET',
      redirect: 'follow'
    })
    .then(res => res.json());

    return res;
  }

  const isChecked = async (id) => {
    const res = await fetch(`https://api.countapi.xyz/get/gj.farmbot.materials/${id}`, {
      method: 'GET',
      redirect: 'follow'
    })
    .then(async res => {

      if (res.ok) {
        return res.json();
      }
      
      return await hit(id);
    })
    .then(data => data.value);
    
    count = res ? res : 0;

    return count % 2 === 0;
  };

  const materialsTable = document.getElementById('materials');

  const rows = [...materialsTable.getElementsByTagName('tr')];
  const trHead = rows[0];
  $(trHead).prepend('<th>Acquired</th>');

  for (const i in rows.slice(1, rows.length - 1)) {
    const tr = rows[parseInt(i) + 1];
    const children = tr.children

    if (!children.length) {
      continue;
    }

    const id = `mat${i}`
    const checked = await isChecked(id);
    $(tr).prepend(`<td><input type="checkbox" id="${id}" name="${id}" value="${children[1].innerHTML}" ${checked ? 'checked' : ''}></td>`);
    $(`#${id}`).click(function() {
      hit(id);

      $(tr).css('color', this.checked ? 'gray' : 'white');
      $(tr).css('text-decoration', this.checked ? 'line-through' : 'none');
    });

    $(tr).css('color', checked ? 'gray' : 'white');
    $(tr).css('text-decoration', checked ? 'line-through' : 'none');
  }

  const trTotal = rows[rows.length - 1];
  $(trTotal).prepend('<td></td>');

})();
