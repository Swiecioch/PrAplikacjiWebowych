const contactForm = document.querySelector("[data-contactform]");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Nie można wysłać wiadomości.");
});