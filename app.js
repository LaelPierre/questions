// traversing the DOM method
// select element

// const btns = document.querySelectorAll(".question-btn");

// // functionnality
// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;

//     question.classList.toggle("show-text");
//   });
// });

// using selectors inside element method
// select element
const questions = document.querySelectorAll(".question");

// functionnality
questions.forEach(function (question) {
  // console.log(question);
  const btn = question.querySelector(".question-btn");
  // console.log(btn);

  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});
