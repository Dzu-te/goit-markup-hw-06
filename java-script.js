document.addEventListener("DOMContentLoaded", function () {
    const openButton = document.getElementById("openButton");
    const closeButton = document.getElementById("closeButton");
    const overLay = document.getElementById("overLay");

    openButton?.addEventListener("click", function () {
        overLay.classList.add("is-open")
    });

    closeButton?.addEventListener("click", function () {
        overLay.classList.remove("is-open")
    });
});