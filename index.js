// document
//     .getElementById("showApologyBtn")
//     .addEventListener("click", function () {
//         var apologyMessage = document.getElementById("apologyMessage");
//         apologyMessage.classList.toggle("hidden");
//     });

document
    .getElementById("showApologyBtn")
    .addEventListener("click", function () {
        var apologyMessage = document.getElementById("apologyMessage");
        var apologyBtn = document.getElementById("showApologyBtn");

        apologyMessage.classList.toggle("hidden");

        if (apologyMessage.classList.contains("hidden")) {
            apologyBtn.textContent = "Show Apology";
        } else {
            apologyBtn.textContent = "Hide Apology";
        }
    });
