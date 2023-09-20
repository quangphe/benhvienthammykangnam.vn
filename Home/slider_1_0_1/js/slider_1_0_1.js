// Get API Slider
const getSlider = async () => {
    const response = await fetch(`https://benhvienthammykangnam.vn/wp-json/acf/v3/pages/155879/group_page_field`);
    const data = await response.json();
    const dataSliderPC = data.group_page_field.body_custom[0].slider_sub_fields[0].slide_pc;
    const dataSliderMB = data.group_page_field.body_custom[0].slider_sub_fields[0].slide_mb;

    const slideCard = (data, datamb) => {
        html = `
            <div class="slider_1_0_1__box">
                <a href="${data.link}">
                    <picture>
                        <source media="(max-width:425px)" srcset="${datamb.url}" alt="${datamb.alt}">
                        <img width="1522" height="627" src="${data.url}" alt="${data.alt}">
                    </picture>
                </a>
            </div>
        `;
        document.getElementById("slider_1_0_1").innerHTML = html;

    }

    slideCard(dataSliderPC[0], dataSliderMB[0]);

    const slideNext = (datapc, datamb) => {
        let count = 1
        setInterval(() => {
            if (count < datapc.length) {
                slideCard(datapc[count], datamb[count])
                count++;
            } else {
                count = 0;
            }

        }, 3000);
    }
    slideNext(dataSliderPC, dataSliderMB);

};

getSlider();