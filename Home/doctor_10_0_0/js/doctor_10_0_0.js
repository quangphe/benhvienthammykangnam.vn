const closeModal = () => {
    document.getElementById(`modal-doctor`).remove();
}
const doctor = [];
const modalDoctor = (id) => {
    const doctorFilter = doctor.filter(item => (
        item.modalDoctor === id
    ));
    let html = `
        <div class="modal" style="display: flex;" id="modal-doctor">
            <div class="modal-bg" onclick="closeModal()"></div>
            <div class="modal-box animate-pop">
                <div class="modal-header">
                    <div class="modal-close" onclick="closeModal()">×</div>
                    <div class="modal-title">${doctorFilter[0].name}</div>
                </div>
                <div class="modal-body">
                    ${doctorFilter[0].about_des}
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML("beforeend", html);
}
const getDoctor = async () => {
    const response = await fetch(`https://benhvienthammykangnam.vn/wp-json/wp/v2/pages/155879`);
    const data = await response.json();
    const dataDoctor = data.acf.group_page_field.body_custom[6].doctor_sub_fields[0].doctor_info2;
    const dataDoctorInfo = data.acf.group_page_field.body_custom[6].doctor_sub_fields[0].doctor_info;
    dataDoctorInfo.map((item, index) => {
        const content = item.content.split("\r\n");
        doctor.push({ image: content[0], name: content[1], modalDoctor: `modalDoctor${index}`, about_des: item.about_des });
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

    // const doctorInfo = (data) => {
    //     let html = '';
    //     data.map((item) => {
    //         html += `
    //             <div class="doctor_10_0_0__item modal-btn" onclick="modalDoctor('${item.modalDoctor}')">
    //                 <img width="188" height="188" src="${item.image}" alt="" loading="lazy">
    //             </div>
    //         `
    //     });

    //     document.getElementById("doctor_10_0_0__tabs").innerHTML = html;
    // }
    // doctorInfo(doctor);
};

getDoctor();