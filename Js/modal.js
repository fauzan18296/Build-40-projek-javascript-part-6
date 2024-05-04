const btnOpenModal = document.querySelector(".btn");
const btnCloseModal = document.querySelector(".close-btn");
const modalContent = document.querySelector(".modal-overlay")

btnOpenModal.addEventListener("click", () => {
  modalContent.classList.add("open-modal")
})

btnCloseModal.addEventListener("click", () => {
  modalContent.classList.remove("open-modal");
})