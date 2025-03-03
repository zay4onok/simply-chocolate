(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', onOpenModalBtn);
  refs.closeModalBtn.addEventListener('click', onCloseModalBtn);
  refs.modal.addEventListener('submit', onModalSubmit);

  if (localStorage.getItem('formOpen')) {
    refs.modal.classList.remove('is-hidden');
  }

  function onOpenModalBtn() {
    refs.modal.classList.remove('is-hidden');
    localStorage.setItem('formOpen', 'true');
  }

  function onCloseModalBtn() {
    refs.modal.classList.add('is-hidden');
    localStorage.removeItem('formOpen');
  }

  function onModalSubmit(event) {
    refs.modal.classList.add('is-hidden');
    localStorage.removeItem('formOpen');
  }
})();
