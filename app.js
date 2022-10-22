// traversing the DOM method
// select element
const btns = document.querySelectorAll(".question-btn");

// functionnality
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const question = e.currentTarget.parentElement.parentElement;

    question.classList.toggle("show-text");
  });
});
