// Get API Slider
const getSlider = async () => {
    const response = await fetch(`https://benhvienthammykangnam.vn/wp-json/wp/v2/pages/155879`);
    const data = await response.json();
    const dataSliderPC = data.acf.group_page_field.body_custom[0].slider_sub_fields[0].slide_pc;
    const dataSliderMB = data.acf.group_page_field.body_custom[0].slider_sub_fields[0].slide_mb;

    return { dataSliderPC, dataSliderMB };
};

// Gọi API
getSlider();

// Insert hình ảnh vào UI 
let slideCard = (data, datamb) => {
    document.getElementById("slider_1_0_1__link").href = data.link;
    document.getElementById("slider_1_0_1__sourceImg").srcset = datamb.url;
    document.getElementById("slider_1_0_1__sourceImg").alt = datamb.alt;
    document.getElementById("slider_1_0_1__img").src = data.url;
    document.getElementById("slider_1_0_1__img").alt = data.alt;
}

// Luồng chạy
function buildNextSlide(count, datapc, datamb) {
    if (datapc.length == 1) {
        clearInterval(time)
    }
    if (count < datapc.length) {
        slideCard(datapc[count], datamb[count])
        count++;
    } else {
        count = 1;
        slideCard(datapc[0], datamb[0])
    }
}

// Click control UI

let control = async (count) => {
    activeSlide(count);
    let run = await getSlider();
    buildNextSlide(count, run.dataSliderPC, run.dataSliderMB);
}

function activeSlide(count) {
    let itemDot = document.getElementsByClassName("slider_1_0_1__itemDot");
    for (let i = 0; i < itemDot.length; i++) {
        itemDot[i].classList.remove('active');
    }
    itemDot[count].classList.add('active');
}

// Chay tu dong

let autoplay = async () => {
    let run = await getSlider();
    let count = 1
    const time = setInterval(() => {
        datapc = run.dataSliderPC;
        datamb = run.dataSliderMB;

        if (datapc.length == 1) {
            clearInterval(time)
        }
        if (count < datapc.length) {
            slideCard(datapc[count], datamb[count]);
            activeSlide(count);
            count++;
        } else {
            count = 1;
            slideCard(datapc[0], datamb[0]);
            activeSlide(0);
        }

    }, 4000);
}

autoplay();

