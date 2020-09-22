let btnDeleteFirst = document.getElementById('btn-del-first');
btnDeleteFirst.addEventListener('click', deleteFirst);

let btnDeleteSecond = document.getElementById('btn-del-second');
btnDeleteSecond.addEventListener('click', deleteSecond);

let btnDeleteAll = document.getElementById('btn-del-all');
btnDeleteAll.addEventListener('click', deleteAll );

let btnMove = document.getElementById('btn-move');
btnMove.addEventListener('click', moveImages);

function deleteFirst() {
    document.getElementById('image-left').src = "images/sin_imagen.png";
};


function deleteSecond() {
    document.getElementById('image-right').src = 'images/sin_imagen.png';
};


function deleteAll () {
    document.getElementById('image-left').src = "images/sin_imagen.png";
    document.getElementById('image-right').src = 'images/sin_imagen.png';
};


function moveImages() {
    var imageLeft = document.getElementById('image-left').src;
    var imageRight = document.getElementById('image-right').src;
    var temp;
    temp = imageLeft;
    document.getElementById('image-left').src = imageRight;
    document.getElementById('image-right').src = temp;
};