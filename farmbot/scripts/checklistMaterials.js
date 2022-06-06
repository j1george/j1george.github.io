
const hitMats = async (id) => {
  const res = await fetch(`https://api.countapi.xyz/hit/gj.farmbot.materials/${id}`, {
    method: 'GET',
    redirect: 'follow'
  })
  .then(res => res.json());

  return res;
}

const isCheckedMats = async (id) => {
  const res = await fetch(`https://api.countapi.xyz/get/gj.farmbot.materials/${id}`, {
    method: 'GET',
    redirect: 'follow'
  })
  .then(async res => {

    if (res.ok) {
      return res.json();
    }
    
    return await hitMats(id);
  })
  .then(data => data.value);
  
  count = res ? res : 0;

  return count % 2 === 0;
};

const materialsTable = document.getElementById('materials');

const rowsMats = [...materialsTable.getElementsByTagName('tr')];
const trHead = rowsMats[0];
$(trHead).prepend('<th>Acquired</th>');

for (const i in rowsMats.slice(1, rowsMats.length - 1)) {
  const tr = rowsMats[parseInt(i) + 1];
  const children = tr.children

  if (!children.length) {
    continue;
  }

  const id = `mat${i}`
  $(tr).prepend(`<td><input type="checkbox" id="${id}" name="${id}" value="${children[1].innerHTML}" ${isCheckedMats(id) ? 'checked' : ''}></td>`);
  $(`#${id}`).click(function() {
    hitMats(id);
  });
}

const trTotal = rowsMats[rowsMats.length - 1];
$(trTotal).prepend('<td></td>');
