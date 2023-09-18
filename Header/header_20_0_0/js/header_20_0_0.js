// Get API Header
const header = [];
const getHeader = async () => {
  const response = await fetch(`https://benhvienthammykangnam.vn/wp-json/acf/v3/pages/131621/group_page_field`);
  const data = await response.json();
  const headerJSON = data.group_page_field.header_custom[0].header_sub_fields[0].id_header_20_0_0_sub3;
  headerJSON.map((item, index) => {
    const titlePC = item.titlePC.split("\r\n");
    header.push({ group: item.col1pc, cate: titlePC[0], link: titlePC[1], image: titlePC[2], iconClass: titlePC[3], dataContent: `tab${index}` });
  });
  // console.log(header);
  buildHeader(header);
};
getHeader();


// xử lý data dữ liệu header
buildHeader = async (data) => {
  const menuItem = document.querySelectorAll(".header_20_0_0__item");
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

  // Theo dõi sự thay đổi kích thước màn hình để hiển thị menu
  window.addEventListener("resize", function () {
    runBuild()
  });

  function runBuild() {
    if (window.innerWidth < 920) {
      // Ẩn header desktop và hiển thị header mobile
      document.getElementById("headerSideBar").innerHTML = mbCard();
      headerMobile();
    } else {
      // Ẩn header mobile và hiển thị header desktop
      document.getElementById("headerSideBar").innerHTML = pcCard();
      headerDesktop();
    }
  }

  function headerDesktop() {
    const renderDataHeader = (data) => {
      let html = "";
      data.map((item) => {
        html += `
              <li class="header_20_0_0__item mega_menu">
                  <div class="header_20_0_0__link">
                      <a target="_blank" href="#">${item.cate}</a>
                  </div>
                  <div class="header_20_0_0__dropdown">
                      <div class="header_20_0_0__dropItem">
                          <div class="header_20_0_0__pic">
                              <img width="340" height="221" src="${item.image}" alt="">
                          </div>
                      </div>
                      ${item.group}
                  </div>
              </li>
              `;
      });
      return html;
    };
    document.getElementById("header_20_0_0__listMenu").innerHTML =
      renderDataHeader(header);
  }

  function headerMobile() {
    const renderDataHeaderMB = (obj) => {
      let html = "";
      obj.map((item) => {
        html += `
                  <li class="tab-link" data-content="${item.dataContent}">
                      <i class="tab-icon ${item.iconClass}">
                      </i>
                      <span>
                          ${item.cate}
                      </span>
                  </li>
              `;
      });
      return html;
    };
    document.getElementById("tabs").innerHTML = renderDataHeaderMB(header);

    const renderDataMB = (obj) => {
      let html = "";
      obj.map((item) => {
        html += `
              <li class="menuSub" id="${item.dataContent}">
                  ${item.group}
              </li>
              `;
      });
      return html;
    };
    document.getElementById("menuChild").innerHTML = renderDataMB(header);

    document.getElementsByClassName("menuSub")[0].classList.add("active");
    document.getElementsByClassName("tab-link")[0].classList.add("active");

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

  const mbCard = () => {
    return `
          <div class="header_20_0_0__menu--mb" id="header_20_0_0__menu--mb">
              <ul class="tabs" id="tabs"></ul>
              <ul class="menuChild" id="menuChild"></ul>
          </div>
      `;
  };
  const pcCard = () => {
    return `
          <div class="header_20_0_0__list">
              <div class="header_20_0_0__listMenu" id="header_20_0_0__listMenu"></div>
              <div class="header_20_0_0__flag header_20_0_0__flag-pc">
                  <div class="header_20_0_0__icon">
                  <a target="_blank" href="" rel="nofollow">
                      <img width="33" height="18" src="https://benhvienthammykangnam.vn/wp-content/themes/SCI_Theme/Module/Header/header_20_0_0/images/en.gif" alt="en">
                  </a>
                  <a target="_blank" href="/">
                      <img width="33" height="18" src="https://benhvienthammykangnam.vn/wp-content/themes/SCI_Theme/Module/Header/header_20_0_0/images/vi.gif" alt="vi">
                  </a>
                  </div>
                  <div class="header_20_0_0__search">
                      <div class="header_20_0_0__btn location">
                          <img width="20" height="20" src="https://benhvienthammykangnam.vn/wp-content/themes/SCI_Theme/Module/Header/header_20_0_0/images/location.svg" alt="location">
                      </div>
                  </div>
              </div>
          </div>
      `;
  };
  runBuild();
}





