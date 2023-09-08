const renderDataAddress = (obj) => {
    let html = "";
    obj.map(item => {
        html += `
        <div class="branch_kn_1_0_0__item">
            <p>${item.name}</p>
            <span>${item.address}</span>
            <div class="branch_kn_1_0_0__des">
                <div class="branch_kn_1_0_0__map">
                    <a target="_blank" href="${item.map}" class="branch_kn_1_0_0__map--link"> <div class="branch_kn_1_0_0__map--img"></div> Chỉ đường</a>
                </div>
                <button class="branch_kn_1_0_0__call btnkn1call">
                    <div class="branch_kn_1_0_0__call--img"></div>Gọi ngay
                </button>
            </div>
        </div>
        `;
    });
    return html;
}

document.getElementById('overflowTest').innerHTML = renderDataAddress(dataAddress);