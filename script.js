document.addEventListener("DOMContentLoaded", function () {
    const monthBtn = document.querySelector(".month");
    const yearBtn = document.querySelector(".year");
    const cardMonth = document.querySelector(".card-month");
    const cardYear = document.querySelector(".card-year");

    cardYear.style.display = "grid";
    cardMonth.style.display = "none";
    yearBtn.classList.add("active");

    function setActiveButton(activeBtn, inactiveBtn) {
        activeBtn.classList.add("active");
        inactiveBtn.classList.remove("active");
    }

    monthBtn.addEventListener("click", function () {
        cardMonth.style.display = "grid";
        cardYear.style.display = "none";
        setActiveButton(monthBtn, yearBtn);
    });

    yearBtn.addEventListener("click", function () {
        cardYear.style.display = "grid";
        cardMonth.style.display = "none";
        setActiveButton(yearBtn, monthBtn);
    });
});
