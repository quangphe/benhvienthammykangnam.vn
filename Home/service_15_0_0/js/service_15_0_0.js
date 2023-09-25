const service = [];
const getService = async () => {
    const response = await fetch(`https://benhvienthammykangnam.vn/wp-json/wp/v2/pages/155879`);
    const data = await response.json();
    const dataServiceTitle = data.acf.group_page_field.body_custom[1].service_sub_fields[0];
    const dataService = data.acf.group_page_field.body_custom[1].service_sub_fields[0].service_info2;
    const dataServiceInfo = data.acf.group_page_field.body_custom[1].service_sub_fields[0].service_info;
    dataServiceInfo.map((item) => {
        const title = item.title.split("\r\n");
        service.push({ image: title[0], name: title[1], link: title[2] });
    })

    const serviceCard = (data) => {
        function service() {
            document.getElementById("service_15_0_0__image").src = data.serive_img;
            document.getElementById("service_15_0_0__title").innerHTML = data.serive_dv;
            document.getElementById("service_15_0_0__desc").innerHTML = data.serive_cont;
        }
        service();

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
};

getService();