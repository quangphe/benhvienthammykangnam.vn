document.addEventListener("DOMContentLoaded", function () {

    const notiprice = document.getElementsByClassName("notiprice");
    const popup_regist_1_0_0__overlayClickForm = document.getElementById("popup_regist_1_0_0__overlayClickForm");
    const popup_regist_1_0_0__overlay = document.getElementById("popup_regist_1_0_0__overlay");
    const close_form = document.getElementById("close-form");

    for (const regist of notiprice) {
        regist.addEventListener("click", function () {
            popup_regist_1_0_0__overlayClickForm.style.display = "block";
            popup_regist_1_0_0__overlay.style.display = "block";
        });
    }

    close_form.addEventListener("click", function () {
        popup_regist_1_0_0__overlayClickForm.style.display = "none";
        popup_regist_1_0_0__overlay.style.display = "none";
    });

    popup_regist_1_0_0__overlay.addEventListener("click", function () {
        popup_regist_1_0_0__overlayClickForm.style.display = "none";
        popup_regist_1_0_0__overlay.style.display = "none";
    });

});