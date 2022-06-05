(async () => {

  const hit = async (id) => {
    const res = await fetch(`https://api.countapi.xyz/hit/gj.farmbot.steps/${id}`, {
      method: 'GET',
      redirect: 'follow'
    })
    .then(res => res.json());

    return res;
  }

  const isChecked = async (id) => {
    const res = await fetch(`https://api.countapi.xyz/get/gj.farmbot.steps/${id}`, {
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

  const stepsDiv = document.getElementById('accordion');

  const stepHeaders = [...stepsDiv.getElementsByTagName('h1')];

  for (const i in stepHeaders) {
    const stepHeader = $(stepHeaders[parseInt(i)]);

    const id = `mat${i}`

    stepHeader.attr('id', id);

    stepHeader.attr('class', await isChecked(id) ? 'show' : 'hide');

    $(`#${id}`).click(function() {

      stepHeader.attr('class', this.checked ? 'show' : 'hide');
      hit(id);
    });
  }

})();
