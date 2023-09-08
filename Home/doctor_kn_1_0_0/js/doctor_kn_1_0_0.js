let img3 = [];
let cont3 = [];

img3.push("images/bac-si-anie-le.webp");
cont3.push("<p class='doctor_kn_1_0_0__quote'>Hạnh phúc là được làm đẹp cho người<br> làm đẹp cho đời...Và đó là động lực để<br>chúng tôi không ngừng nỗ lực </p><p class='doctor_1_0_0__position'>Chuyên gia hàm mặt</p><div class='doctor_1_0_0__name'>Dr Annie Lê</div><ul><li>- Bác sĩ chuyên khoa thẩm mỹ hàm mặt BVTM Kangnam</li><li>- Thành viên Hiệp hội Thẩm mỹ Hàn Quốc</li></ul>");

img3.push("images/bac-si-hwang.webp");
cont3.push("<p class='doctor_kn_1_0_0__quote'>Vui vẻ là được làm đẹp cho người<br> làm đẹp cho đời...Và đó là động lực để<br>chúng tôi không ngừng nỗ lực </p><p class='doctor_1_0_0__position'>Chuyên gia trẻ hóa</p><div class='doctor_1_0_0__name'>Dr.Hwang</div><ul><li>- 30 năm kinh nghiệm trẻ hóa</li><li>- Giáo sư Bệnh viện ĐH Quốc Gia Seoul</li></ul>");

let pic3 = document.querySelector(".doctor_kn_1_0_0__pic img");
let content3 = document.querySelector(".doctor_kn_1_0_0__content");
let random3;
let runSlide3 = setInterval(function () {
    for (let i3 = 0; i3 < img3.length; i3++) {
        random3 = Math.floor(Math.random() * img3.length);
    }
    pic3.setAttribute("src", img3[random3]);
    content3.innerHTML = cont3[random3];
}, 5000);
setTimeout(runSlide3, 6000);