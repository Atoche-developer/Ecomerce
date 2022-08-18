"use strict";

(function () {
  var contentImg = document.querySelector('.modal-imagen');
  contentImg.addEventListener('click', mostrarModal);

  function mostrarModal(event) {
    var img = event.target.getAttribute('data-im');
    var newImg = document.createElement('img');
    newImg.src = "./build/img/".concat(img, ".jpg");
    newImg.classList.add('img-fluid');
    var modal = document.querySelector('.modal-body');
    modal.removeChild(modal.firstChild);
    modal.appendChild(newImg);
  }
})();