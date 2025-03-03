(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', onOpenModalBtn);

  function addEventListeners() {
    refs.modal.addEventListener('click', onModalClick);
    refs.closeModalBtn.addEventListener('click', onCloseModalBtn);
    refs.modal.addEventListener('submit', onModalSubmit);
    document.addEventListener('keydown', onModalKeydown);
  }

  function removeEventListeners() {
    refs.modal.removeEventListener('click', onModalClick);
    refs.closeModalBtn.removeEventListener('click', onCloseModalBtn);
    refs.modal.removeEventListener('submit', onModalSubmit);
    document.removeEventListener('keydown', onModalKeydown);
  }

  if (localStorage.getItem('formOpen')) {
    refs.modal.classList.remove('is-hidden');

    addEventListeners();
  }

  function onOpenModalBtn() {
    refs.modal.classList.remove('is-hidden');
    localStorage.setItem('formOpen', 'true');

    addEventListeners();
  }

  function onCloseModalBtn() {
    refs.modal.classList.add('is-hidden');
    localStorage.removeItem('formOpen');

    removeEventListeners();
  }

  function onModalSubmit(event) {
    event.preventDefault();
    onCloseModalBtn();
  }

  function onModalClick(event) {
    if (event.target !== event.currentTarget) return;
    onCloseModalBtn();
  }

  function onModalKeydown(event) {
    if (event.key === 'Escape') onCloseModalBtn();
  }
})();
