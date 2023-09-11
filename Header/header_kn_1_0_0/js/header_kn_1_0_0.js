const menuItem = document.querySelectorAll(".header_kn_1_0_0__item");
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
    document.getElementById("headerMenuBtn").innerHTML = "✕";
});
document.getElementById("headerBg").addEventListener("click", () => {
    document.getElementById("headerSideBar").classList.remove("show");
    document.getElementById("headerBg").style.display = "none";
    document.getElementById("headerMenuBtn").innerHTML = "☰";
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
            .getElementsByClassName("header_kn_1_0_0")[0]
            .classList.add("header_kn_1_0_0--active");
    } else {
        document
            .getElementsByClassName("header_kn_1_0_0")[0]
            .classList.remove("header_kn_1_0_0--active");
    }
};

// Theo dõi sự thay đổi kích thước màn hình để hiển thị menu
window.addEventListener("resize", function () {
    if (window.innerWidth < 600) {
        // Ẩn header desktop và hiển thị header mobile
        document.getElementById("headerSideBar").innerHTML = '<div class="header_kn_1_0_0__menu--mb" id="header_kn_1_0_0__menu--mb"><ul class="tabs" id="tabs"></ul><ul class="menuChild" id="menuChild"></ul></div>';
        headerMobile();
    } else {
        // Ẩn header mobile và hiển thị header desktop
        document.getElementById("headerSideBar").innerHTML = '<div class="header_kn_1_0_0__list"><div class="header_kn_1_0_0__listMenu" id="header_kn_1_0_0__listMenu"></div><div class="header_kn_1_0_0__flag header_kn_1_0_0__flag-pc"><a target="_blank" href="" rel="nofollow"><img width="33" height="18" src="images/en.gif" alt="en"></a><a href="/"><img width="33" height="18" src="images/vi.gif" alt="vi"></a></div><div class="header_kn_1_0_0__search"><div class="header_kn_1_0_0__btn"><img width="20" height="20" src="images/location.svg" alt=""></div></div></div>';
        headerDesktop();
    }
});

window.onload = function () {
    if (window.innerWidth < 600) {
        // Ẩn header desktop và hiển thị header mobile
        document.getElementById("headerSideBar").innerHTML = '<div class="header_kn_1_0_0__menu--mb" id="header_kn_1_0_0__menu--mb"><ul class="tabs" id="tabs"></ul><ul class="menuChild" id="menuChild"></ul></div>';
        headerMobile();
    } else {
        // Ẩn header mobile và hiển thị header desktop
        document.getElementById("headerSideBar").innerHTML = '<div class="header_kn_1_0_0__list"><div class="header_kn_1_0_0__listMenu" id="header_kn_1_0_0__listMenu"></div><div class="header_kn_1_0_0__flag header_kn_1_0_0__flag-pc"><a target="_blank" href="" rel="nofollow"><img width="33" height="18" src="images/en.gif" alt="en"></a><a href="/"><img width="33" height="18" src="images/vi.gif" alt="vi"></a></div><div class="header_kn_1_0_0__search"><div class="header_kn_1_0_0__btn"><img width="20" height="20" src="images/location.svg" alt=""></div></div></div>';
        headerDesktop();
    }
};

// xử lý data dữ liệu header
function headerDesktop() {
    const renderDataHeader = (obj) => {
        let html = "";
        obj.map(item => {
            html += `
            <li class="header_kn_1_0_0__item mega_menu">
                <div class="header_kn_1_0_0__link">
                    <a href="#">${item.cate}</a>
                </div>
                <div class="header_kn_1_0_0__dropdown">
                    <div class="header_kn_1_0_0__dropItem">
                        <div class="header_kn_1_0_0__pic">
                            <img width="340" height="221" src="${item.image}" alt="">
                        </div>
                    </div>
                    ${item.group}
                </div>
            </li>
            `
        });
        return html;
    }
    document.getElementById('header_kn_1_0_0__listMenu').innerHTML = renderDataHeader(header);
}

function headerMobile() {
    const renderDataHeaderMB = (obj) => {
        let html = "";
        obj.map(item => {
            html += `
                <li class="tab-link" data-content="${item.dataContent}">
                    <i class="tab-icon ${item.iconClass}">
                    </i>
                    <span>
                        ${item.cate}
                    </span>
                </li>
            `
        });
        return html;
    }
    document.getElementById('tabs').innerHTML = renderDataHeaderMB(header);

    const renderDataMB = (obj) => {
        let html = "";
        obj.map(item => {
            html += `
            <li class="menuSub" id="${item.dataContent}">
                ${item.group}
            </li>
            `
        });
        return html;
    }
    document.getElementById('menuChild').innerHTML = renderDataMB(header);

    document.getElementsByClassName('menuSub')[0].classList.add('active');
    document.getElementsByClassName('tab-link')[0].classList.add('active');


    // click active menu mobile
    var tabLinks = document.querySelectorAll(".tab-link");
    var tabContent = document.querySelectorAll(".menuSub");

    tabLinks.forEach(function (el) {
        el.addEventListener("click", openTabs);
    });


    function openTabs(el) {
        var btn = el.currentTarget; // lắng nghe sự kiện và hiển thị các element
        var content = btn.dataset.content; // lấy giá trị trong data-electronic

        tabContent.forEach(function (el) {
            el.classList.remove("active");
        });

        tabLinks.forEach(function (el) {
            el.classList.remove("active");
            el.classList.remove("current");
        });

        document.querySelector("#" + content).classList.add("active");

        btn.classList.add("active");
        btn.classList.add("current");
    }
}








