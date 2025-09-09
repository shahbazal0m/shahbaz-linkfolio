const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

function allFunction() {
    toggleBtn.addEventListener("click", () => {
        body.classList.toggle("light-mode");

        const icon = toggleBtn.querySelector("i");
        if (body.classList.contains("light-mode")) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        } else {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }
    });

}

allFunction();