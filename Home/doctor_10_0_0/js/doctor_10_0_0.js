const modalDoctor = (id) => {
    document.getElementById(`modal-${id}`).style.display = "block";
}
const closeModal = (id) => {
    document.getElementById(`modal-${id}`).style.display = "none";
}

const doctor = [];
const getDoctor = async () => {
    const response = await fetch(`https://benhvienthammykangnam.vn/wp-json/acf/v3/pages/155879/group_page_field`);
    const data = await response.json();
    const dataDoctor = data.group_page_field.body_custom[6].doctor_sub_fields[0].doctor_info2;
    const dataDoctorInfo = data.group_page_field.body_custom[6].doctor_sub_fields[0].doctor_info;
    console.log(dataDoctorInfo);
    dataDoctorInfo.map((item, index) => {
        const content = item.content.split("\r\n");
        doctor.push({ image: content[0], name: content[1], modalDoctor: `modalDoctor${index}`, about_des: item.about_des });
        console.log(content);
    });

    const doctorCard = (data) => {
        html = `
            <div class="doctor_10_0_0__pic">
                <img width="399" height="401" src="${data.doctor_img}" alt="" loading="lazy">
            </div>
            <div class="doctor_10_0_0__content">
                ${data.doctor_dv}
            </div>
        `;
        document.getElementById("doctor_10_0_0__box").innerHTML = html;

    }

    doctorCard(dataDoctor[0]);

    const slideNext = (data) => {
        let count = 1
        setInterval(() => {
            if (count < data.length) {
                doctorCard(data[count])
                count++;
            } else {
                count = 0;
            }

        }, 3000);
    }
    slideNext(dataDoctor);

    const doctorInfo = (data) => {
        let html = '';
        data.map((item, index) => {
            html += `
                <div class="doctor_10_0_0__item modal-btn" onclick="modalDoctor(${index})">
                    <img width="188" height="188" src="${item.image}" alt="" loading="lazy">
                </div>
                <div class="modal" id="modal-${index}" style="display: none;">
                    <div class="modal-bg"></div>
                    <div class="modal-box animate-pop">
                        <div class="modal-header">
                            <div class="modal-close" onclick="closeModal(${index})">×</div>
                            <div class="modal-title">${item.name}</div>
                        </div>
                        <div class="modal-body">
                            ${item.about_des}
                        </div>
                    </div>
                </div>
            `
        });

        document.getElementById("doctor_10_0_0__tabs").innerHTML = html;
    }
    doctorInfo(doctor);
};

getDoctor();