const popup_regist_1_0_0 = `
<section class="popup_regist_1_0_0" id="popup_regist_1_0_0">
<div class="popup_regist_1_0_0__box">
    <div class="popup_regist_1_0_0__overlay" id="popup_regist_1_0_0__overlay"></div>
    <div id="popup_regist_1_0_0__overlayClickForm" class="popup_regist_1_0_0__overlayForm">
        <div class="popup_regist_1_0_0__boxTv">
            <div class="popup_regist_1_0_0__form" id="regist_ft_1_0_0__form">
                <div class="popup_regist_1_0_0__title">
                    <img width="130" height="auto"
                        src="//cdn.benhvienthammykangnam.vn/css/lib/images/logo-kn.svg" alt="Logo Kangnam">
                    Nhận báo giá thẩm mỹ
                    <b id="close-form">╳</b>
                </div>
                <span>Bạn muốn biết chi phí của dịch vụ nào,
                    để lại thông tin để Kangnam gửi báo giá giúp bạn! </span>

                <article>
                    <div class="popup_regist_1_0_0__item">
                        <label>* Tên:</label>
                        <input id="iname" name="iname" type="textbox" required>
                    </div>
                    <div class="popup_regist_1_0_0__item">
                        <label>* Số điện thoại:</label>
                        <input id="imob" name="imob" type="textbox" required>
                    </div>
                    <div class="popup_regist_1_0_0__item">
                        <label>* Dịch vụ quan tâm:</label>
                        <select name="icity" id="icity">
                            <option value="- Chọn -">--- Chọn ---</option>
                            <option value="Cắt mí - Bấm mí">Cắt mí - Bấm mí</option>
                            <option value="Nâng mũi">Nâng mũi</option>
                            <option value="Nâng ngực">Nâng ngực</option>
                            <option value="Giảm mỡ">Giảm mỡ</option>
                            <option value="Hàm mặt">Hàm mặt</option>
                            <option value="Tạo hình môi">Tạo hình môi</option>
                            <option value="Phun xăm">Phun xăm</option>
                            <option value="Trị nám - Tàn nhang">Trị nám - Tàn nhang</option>
                            <option value="Trị mụn - Mụn thịt">Trị mụn - Mụn thịt</option>
                            <option value="Căng da - Cấy mỡ">Căng da - Cấy mỡ</option>
                            <option value="Thẩm mỹ khác">Thẩm mỹ khác</option>
                        </select>
                    </div>
                    <input type="hidden" style="display:none" id="iemail" name="iemail" type="textbox"
                        placeholder="Email:">
                    <!-- <textarea id="itext" type="hidden" name="itext" value="" placeholder="Dịch vụ quan tâm"></textarea> -->
                    <input type="hidden" id="gclid_field" name="gclid_field" value="">
                    <input type="hidden" id="code_campaign" name="code_campaign" value="583971142">
                    <input type="hidden" id="name_campaign" name="name_campaign" value="[Kangnam] Sale Kangnam">
                </article>
                <div class="popup_regist_1_0_0__reg">
                    <input id="popup_regist_1_0_0__clickSent" onclick="ants_send_contact(this);" type="button"
                        value="NHẬN BÁO GIÁ">
                </div>
            </div>
        </div>
    </div>
</div>
</section>
`;

const callBtn = document.querySelectorAll(".btnkn1call, .btncallnow, .btncallme, .bvkn_dkcall, .notiprice");
for (let i = 0; i < callBtn.length; i++) {
    callBtn[i].addEventListener('click', () => {
        document.getElementsByTagName('body')[0].insertAdjacentHTML("beforeend", popup_regist_1_0_0)
        document.getElementById('close-form').addEventListener('click', () => {
            document.getElementById('popup_regist_1_0_0').remove()
        })
        document.getElementById('popup_regist_1_0_0__overlay').addEventListener('click', () => {
            document.getElementById('popup_regist_1_0_0').remove()
        })
        // window.onclick = function (e) {
        //     if (e.target == document.getElementById('popup_call_1_0_0')) {
        //         document.getElementById('popup_call_1_0_0').remove()
        //     }
        // }
    })
}