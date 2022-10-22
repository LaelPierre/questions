// traversing the DOM method
// select element
const btns = document.querySelectorAll(".question-btn");

// functionnality
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    console.log(
      e.currentTarget.parentElement.parentElement.classList.toggle("show-text")
    );
  });
});
