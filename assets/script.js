var dropMenu = document.getElementById('drop-menu');

dropMenu.addEventListener('change', carregaProgramadoras);

window.onload = carregaMenu();

function carregaMenu(){
  var nome = document.createElement('option');
  nome.innerHTML = 'Selecione a sede';
  nome.value = 'none';

  dropMenu.appendChild(nome);

  for (sede in data) {
    var itemMenu = document.createElement('option');

    itemMenu.value = sede;
    itemMenu.innerHTML = sede;
    dropMenu.appendChild(itemMenu);
  }
};

function carregaProgramadoras() {
  var sede = dropMenu.value;
  var listaProgramadoras = document.getElementById('exibe-programadoras');

  listaProgramadoras.innerHTML = '';

  for (turma in data[sede]) {
    for (i in data[sede][turma]['students']) {
      var img = document.createElement('img');
      img.src = data[sede][turma]['students'][i]['photo'];
      listaProgramadoras.appendChild(img);
    }
  }

};