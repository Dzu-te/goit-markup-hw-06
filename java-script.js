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

document.addEventListener("DOMContentLoaded", function () {
    const openButtonMenu = document.getElementById("openButtonMenu");
    const closeButtonMenu = document.getElementById("closeButtonMenu");
    const overLayMenu = document.getElementById("overLayMenu");

    openButtonMenu?.addEventListener("click", function () {
        overLayMenu.classList.add("is-open")
    });

    closeButtonMenu?.addEventListener("click", function () {
        overLayMenu.classList.remove("is-open")
    });
});