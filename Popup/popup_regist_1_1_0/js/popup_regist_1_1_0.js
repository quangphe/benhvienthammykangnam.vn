const popup_regist_1_1_0 = `
<section class="popup_regist_1_1_0" id="popup_regist_1_1_0">
    <div class="popup_regist_1_1_0__overlay" id="popup_regist_1_1_0_overlay"></div>
    <div class="popup_regist_1_1_0__mainForm">
        <div class="popup_regist_1_1_0__boxTv">            
            <div class="popup_regist_1_1_0__headerBox">
                <img width="200" height="100"
                    src="https://benhvienthammykangnam.vn/css/lib/images/logo-kn-white.svg" alt="Logo Kangnam">
                <p class="popup_regist_1_1_0__headerTitle">Đăng ký Khuyến Mãi</p>
            </div>
            <div class="popup_regist_1_1_0__contentBox">
                
                    <input id="iname" name="iname" type="textbox" required="" placeholder="Họ tên*:">
                    <input id="imob" name="imob" type="textbox" required="" placeholder="Điện thoại*:">
                    <input type="hidden" style="display:none" id="iemail" name="iemail" placeholder="Email:">
                    <textarea id="itext" type="hidden" name="itext" value=""
                        placeholder="Dịch vụ quan tâm"></textarea>
                    <input type="hidden" id="gclid_field" name="gclid_field" value="">
                    <input type="hidden" id="code_campaign" name="code_campaign" value="583971142">
                    <input type="hidden" id="name_campaign" name="name_campaign" value="[Kangnam] Sale Kangnam">
                
                
                    <input class="popup_regist_1_1_0__clickBtn" id="popup_regist_1_1_0_clickSent"
                        onclick="ants_send_contact(this);" type="button" value="HOÀN THÀNH">
                    <div class="popup_regist_1_1_0__contact">
                        <p>Tư vấn trực tiếp 24/7: <a href="tel:1900.6466">1900.6466</a></p>
                    </div>                   
            </div>
            <a id="popup_regist_1_1_0_closePopup" class="popup_regist_1_1_0__closePopup"></a>           
        </div>
    </div>
</section>
`;

const callBtn = document.querySelectorAll(".btnkn1call, .btncallnow, .btncallme, .bvkn_dkcall, .notiprice");
for (let i = 0; i < callBtn.length; i++) {
    callBtn[i].addEventListener('click', () => {
        document.getElementsByTagName('body')[0].insertAdjacentHTML("beforeend", popup_regist_1_1_0)
        document.getElementById('popup_regist_1_1_0_closePopup').addEventListener('click', () => {
            document.getElementById('popup_regist_1_1_0').remove()
        })
        document.getElementById('popup_regist_1_1_0_overlay').addEventListener('click', () => {
            document.getElementById('popup_regist_1_1_0').remove()
        })
        window.onclick = function (e) {
            console.log(e.target);
            if (e.target == document.querySelector('.popup_regist_1_1_0__mainForm')) {
                document.getElementById('popup_regist_1_1_0').remove()
            }
        }
    })
}