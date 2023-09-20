const service = [];
const getService = async () => {
    const response = await fetch(`https://benhvienthammykangnam.vn/wp-json/acf/v3/pages/155879/group_page_field`);
    const data = await response.json();
    const dataServiceTitle = data.group_page_field.body_custom[1].service_sub_fields[0];
    const dataService = data.group_page_field.body_custom[1].service_sub_fields[0].service_info2;
    const dataServiceInfo = data.group_page_field.body_custom[1].service_sub_fields[0].service_info;
    dataServiceInfo.map((item) => {
        const title = item.title.split("\r\n");
        service.push({ image: title[0], name: title[1], link: title[2] });
    })

    const serviceCard = (data) => {
        html = `
            <div class="service_15_0_0__pic">
                <img width="456" height="456" src="${data.serive_img}" alt="" loading="lazy">
            </div>
            <div class="service_15_0_0__text">
                <h3 class="service_15_0_0__title">${data.serive_dv}</h3>
                <p class="service_15_0_0__desc">${data.serive_cont}</p>
            </div>
        `;
        document.getElementById("service_15_0_0__col5").innerHTML = html;

    }

    serviceCard(dataService[0]);

    const serviceNext = (data) => {
        let count = 1
        setInterval(() => {
            if (count < data.length) {
                serviceCard(data[count])
                count++;
            } else {
                count = 0;
            }

        }, 3000);
    }
    serviceNext(dataService);

    const serviceInfo = (data) => {
        let html = '';
        data.map((item) => {
            html += `
                <div class="service_15_0_0__item">
                    <a href="${item.link}">
                        <img width="164" height="174" src="${item.image}" alt="" loading="lazy">
                        <h3 class="service_15_0_0__content">${item.name}</h3>
                    </a>
                </div>
            `;
        });
        document.getElementById("service_15_0_0__boxItem").innerHTML = html;
    }
    serviceInfo(service);

    const serviceTitle = (data) => {
        console.log(data);
        let html = '';
        html += `
                <div class="service_15_0_0__titleRight">
                    ${data.service_title}
                </div>
            `;
        document.getElementById("service_15_0_0__titleRight").innerHTML = html;
    }
    serviceTitle(dataServiceTitle);
};

getService();