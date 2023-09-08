const menuItem = document.querySelectorAll(".header_1_0_0__item");
menuItem.forEach((item) => {
    item.addEventListener("click", () => {
        menuItem.forEach((item) => {
            item.classList.remove("open");
        });
        item.classList.add("open");
    });
});

document.getElementById("headerMenuBtn").addEventListener("click", () => {
    document.getElementById("headerSideBar").classList.add("show");
    document.getElementById("headerBg").style.display = "block";
});
document.getElementById("headerBg").addEventListener("click", () => {
    document.getElementById("headerSideBar").classList.remove("show");
    document.getElementById("headerBg").style.display = "none";
    menuItem.forEach((item) => {
        item.classList.remove("open");
    });
});

window.onscroll = () => {
    scrollFunction();
};

const scrollFunction = () => {
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
        document
            .getElementsByClassName("header_1_0_0")[0]
            .classList.add("header_1_0_0--active");
    } else {
        document
            .getElementsByClassName("header_1_0_0")[0]
            .classList.remove("header_1_0_0--active");
    }
};


