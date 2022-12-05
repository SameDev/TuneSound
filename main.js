// GABRIEL: FAZER O MENU DROPDOWN PARA COMPRA

function show(){
    document.querySelector('ul.gui').classList.toggle('show')
    if (document.querySelector('ul.gui').classList.contains('show') == true) {
        document.getElementById('guitarra-up').innerHTML = '<i class="fa-solid fa-caret-up"></i>'
    }else {
        document.getElementById('guitarra-up').innerHTML = '<i class="fa-solid fa-caret-down"></i>'
    }
}

function show2(){
    document.querySelector('ul.gui2').classList.toggle('show2')
    if (document.querySelector('ul.gui2').classList.contains('show2') == true) {
        document.getElementById('violao-up').innerHTML = '<i class="fa-solid fa-caret-up"></i>'
    }else {
        document.getElementById('violao-up').innerHTML = '<i class="fa-solid fa-caret-down"></i>'
    }
}


function show4(){
    document.querySelector('ul.gui4').classList.toggle('show4')
    if (document.querySelector('ul.gui4').classList.contains('show4') == true) {
        document.getElementById('baixo-up').innerHTML = '<i class="fa-solid fa-caret-up"></i>'
    }else {
        document.getElementById('baixo-up').innerHTML = '<i class="fa-solid fa-caret-down"></i>'
    }
}

function add(){
    document.querySelector('h3.compra').classList.toggle('add')
}

// SAMUEL: MENU OVERLAY PARA COMPRA

var abrircomprar = (imgurl, desc,preco) => {
    divboxcomprar = document.getElementById('box-compra');

    divboxcomprar.style.display = "block";
    document.getElementById('overlay-compra').style.display = 'block'

    document.getElementById('desc').innerText = desc;
    document.getElementById('preco').innerText = 'R$ '+preco+',00';
    document.getElementById('img').src = imgurl;
}

var abrircomprarkit = () => {
    divboxcomprar = document.getElementById('box-compra-kit');

    divboxcomprar.style.display = "block";
    document.getElementById('overlay-compra').style.display = 'block'
}

var fecharcompra = () => {
    divboxcomprar = document.getElementById('box-compra').style.display = 'none';
    document.getElementById('overlay-compra').style.display = 'none';
}

var fecharcomprakit = () => {
    divboxcomprar = document.getElementById('box-compra-kit').style.display = 'none';
    document.getElementById('overlay-compra').style.display = 'none';
}
