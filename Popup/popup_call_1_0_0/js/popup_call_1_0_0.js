const popup_call_1_0_0 = ` 
    <div class="popup_call_1_0_0__overlay" id="popup_call_1_0_0__overlay"></div>
    <div class="popup_call_1_0_0__mainForm" id="popup_call_1_0_0">
        <div class="popup_call_1_0_0__box">          
            <div class="popup_call_1_0_0__header">
                <div class="popup_call_1_0_0__logo"></div>
                <div class="popup_call_1_0_0__header-note">Bạn muốn biết chi phí của dịch vụ nào,
                    để lại thông tin để Kangnam tư vấn giúp bạn! </div>
            </div>
            <div class="popup_call_1_0_0__content">
                <div class="popup_call_1_0_0__form">
                    <div style="display:none">
                        <input type="text" placeholder="Họ và tên (*)" value="Yêu Cầu Gọi Lại" id="iname"
                            name="iname">
                        <textarea type="text" placeholder="Nhu cầu tư vấn" id="itext"
                            name="itext"></textarea>
                        <input id="iemail" name="iemail" value="no@email.benhvienthammykangnam.vn"
                            type="hidden" placeholder="Email">
                        <input type="hidden" id="gclid_field" name="gclid_field" value="">
                        <input type="hidden" id="name_campaign" name="name_campaign"
                            value="[Kangnam] Yêu Cầu Gọi Lại">
                        <input type="hidden" id="code_campaign" name="code_campaign" value="533588630">
                    </div>
                    <input id="imob" name="imob" type="textbox" placeholder="Nhập số điện thoại của bạn*:">
                </div>
                <div class="popup_call_1_0_0__submit">
                    <input onclick="ants_sent_phone(this);" id="pop_sent" type="button"
                        value="Yêu cầu tư vấn">
                </div>
            </div>
            <div class="popup_call_1_0_0__header-note">* Hoặc gọi ngay hotline: <b>19006466</b></div>
            <a id="popup_call_1_0_0__closePopup" class="popup_call_1_0_0__closePopup"></a>          
        </div>
    </div>
`;

const callBtn = document.querySelectorAll(".btnkn1call, .btncallnow, .btncallme, .bvkn_dkcall");
for (let i = 0; i < callBtn.length; i++) {
    callBtn[i].addEventListener('click', () => {
        document.getElementsByTagName('body')[0].insertAdjacentHTML("beforeend", popup_call_1_0_0)
        document.getElementById('popup_call_1_0_0__closePopup').addEventListener('click', () => {
            document.getElementById('popup_call_1_0_0').remove();
            document.getElementById('popup_call_1_0_0__overlay').remove();
        })
        document.getElementById('popup_call_1_0_0__overlay').addEventListener('click', () => {
            document.getElementById('popup_call_1_0_0').remove();
            document.getElementById('popup_call_1_0_0__overlay').remove();
        })
        window.onclick = function (e) {
            console.log(e.target);
            if (e.target == document.querySelector('.popup_call_1_0_0__mainForm')) {
                document.getElementById('popup_call_1_0_0').remove();
                document.getElementById('popup_call_1_0_0__overlay').remove();
            }
        }
    })
}