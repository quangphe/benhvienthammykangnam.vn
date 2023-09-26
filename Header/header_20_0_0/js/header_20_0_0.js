// Get API Header
const header = [];
const getHeader = async () => {
  const response = await fetch(`https://benhvienthammykangnam.vn/wp-json/wp/v2/pages/131621`);
  const data = await response.json();
  const headerJSON = data.acf.group_page_field.header_custom[0].header_sub_fields[0].id_header_20_0_0_sub3;
  headerJSON.map((item, index) => {
    const titlePC = item.titlePC.split("\r\n");
    header.push({ group: item.col1pc, cate: titlePC[0], link: titlePC[1], image: titlePC[2], iconClass: titlePC[3], dataContent: `tab${index}` });
  });
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
    headerDesktop();
  }

  function headerDesktop() {
    var itemMenu = document.querySelectorAll('.header_20_0_0__item');
    for (let i = 0; i < itemMenu.length; i++) {
      itemMenu[i].addEventListener('mouseover', function () {
        var menuAtt = itemMenu[i].getAttribute('id');
        renderDataHeader(header, menuAtt);
      });
      itemMenu[i].addEventListener('mouseover', function () {
        document.getElementById('headerBg').style.display = "block";
      });
      itemMenu[i].addEventListener('click', function () {
        var menuAtt = itemMenu[i].getAttribute('id');
        renderDataHeader(header, menuAtt);
      });
    }
    var headerBg = document.getElementById('headerBg');
    headerBg.addEventListener('mouseover', function () {
      document.getElementById("header_20_0_0__dropdown").classList.remove('active');
    })
    const renderDataHeader = (data, id) => {
      let html = "";
      var dataFilter = data.filter(item => {
        return item.cate === id
      });
      html = `             
          <div class="header_20_0_0__dropItem">
              <div class="header_20_0_0__pic">
                  <img width="340" height="221" src="${dataFilter[0].image}" alt="">
              </div>
          </div>
          ${dataFilter[0].group}                 
        `;
      document.getElementById("header_20_0_0__dropdown").classList.add('active');
      document.getElementById("header_20_0_0__dropdown").innerHTML = html;
    };
    if (window.innerWidth < 1200) {
      renderDataHeader(header, "Mắt");
    }
    document.getElementById("headerMenuBtn").addEventListener("click", () => {
      document.getElementById("headerSideBar").classList.add("show");
      document.getElementById("headerBg").style.display = "block";
      document.getElementById("headerMenuBtn").innerHTML = "✕";
      renderDataHeader(header, "Mắt");
    });
  }
  runBuild();
}





