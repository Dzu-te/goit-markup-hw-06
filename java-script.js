document.addEventListener("DOMContentLoaded", function () {
    const openButton = document.getElementById("openButton");
    const closeButton = document.getElementById("closeButton");
    const overLay = document.getElementById("overLay");

    openButton.addEventListener("click", function () {
        overLay.classList.add("is-hidden")
    });

    closeButton.addEventListener("click", function () {
        overLay.classList.remove("is-hidden")
    });
});