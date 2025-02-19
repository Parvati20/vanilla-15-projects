let questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
    let btn = question.querySelector(".question-btn");
    // console.log(btn);

    btn.addEventListener("click", function () {
        // console.log(question);

        questions.forEach(function (item) {
            if (item !== question) {
                item.classList.remove("show-text");
            }
        });

        question.classList.toggle("show-text");
    });
});