const header = [
    {
        cate: "Mắt",
        image: "images/dv-mat.webp",
        dataContent: "tab1",
        iconClass: "tab-icon-2",
        group: '<div class="header_kn_1_0_0__dropItem"><div class="header_kn_1_0_0__dropTitle">Thẩm mỹ vùng mắt</div><ul><li><a href="#">PT tạo mắt 2 mí</a> </li><li><a href="#">Khâu tạo mắt 2 mí</a></li><li><a href="#">PT thừa da mí mắt</a></li><li><a href="#">Phẫu thuật tạo mắt 2 mí cho nam</a></li><li><a href="#">PT nâng cung mày</a></li><li><a href="#">PT treo cơ mi</a></li></div><div class="header_kn_1_0_0__dropItem"><div class="header_kn_1_0_0__dropTitle">Khắc phục khuyết điểm mắt</div><ul><li><a href="#">Ghép mỡ tự thân vùng mắt</a> </li><li><a href="#">PT vùng quanh mắt</a></li><li><a href="#">PT tạo hình mí mắt và vùng xung quanh</a></li><li><a href="#">Chỉnh sửa biến chứng sau thẩm mỹ mắt</a></li><li><a href="#">PT lấy bọng mỡ</a></li></ul></div>',
    },
    {
        cate: "Mũi",
        image: "images/dv-mui.webp",
        dataContent: "tab2",
        iconClass: "tab-icon-3",
        group: '<div class="header_kn_1_0_0__dropItem"><div class="header_kn_1_0_0__dropTitle">Thẩm mỹ vùng mũi</div><ul><li><a href="#">Nâng mũi thẩm mỹ</a> </li><li><a href="#">Nâng mũi chất liệu nhân tạo</a></li><li><a href="#">Nâng mũi kết hợp chất liệu tự thân</a></li><li><a href="#">Nâng mũi bằng sụn tự thân</a></li><li><a href="#">Nâng mũi cho nam</a></li></ul></div><div class="header_kn_1_0_0__dropItem"><div class="header_kn_1_0_0__dropTitle">Khắc phục khuyết điểm mũi</div><ul><li><a href="#">PT thu gọn cánh mũi</a> </li><li><a href="#">PT thu nhỏ đầu mũi</a></li><li><a href="#">PT hạ thấp sống mũi gồ</a></li><li><a href="#">Chỉnh sửa mũi bị hỏng sau nâng</a></li><li><a href="#">Tiêm chất làm đầy nâng mũi</a></li></ul></div>',
    },
    {
        cate: "Khuôn mặt",
        image: "images/dv-km.webp",
        dataContent: "tab3",
        iconClass: "tab-icon-4",
        group: '<div class="header_kn_1_0_0__dropItem"><div class="header_kn_1_0_0__dropTitle">Thẩm mỹ hàm mặt</div><ul><li><a href="#">PT chỉnh sửa góc hàm</a> </li><li><a href="#">PT chỉnh sửa thân xương hàm</a></li><li><a href="#">PT chỉnh sửa gò má</a></li><li><a href="#">PT độn cằm</a></li><li><a href="#">PT cắt chỉnh sửa cằm (trượt cằm)</a></li><li><a href="#">PT chữa cười hở lợi</a></li></ul></div><div class="header_kn_1_0_0__dropItem"><div class="header_kn_1_0_0__dropTitle">Thẩm mỹ khác</div><ul><li><a href="#">PT tạo hình môi</a> </li><li><a href="#">PT tạo má lúm</a></li><li><a href="#">PT căng da mặt toàn phần</a></li><li><a href="#">Trẻ hóa da không phẫu thuật</a></li><li><a href="#">Thủ thuật treo chỉ căng da</a></li><li><a href="#">PT cấy mỡ vùng mặt</a></li></ul></div>',
    },
    {
        cate: "Body",
        image: "images/dv-body.webp",
        dataContent: "tab4",
        iconClass: "tab-icon-5",
        group: '<div class="header_kn_1_0_0__dropItem"><div class="header_kn_1_0_0__dropTitle">Thẩm mỹ vòng 1</div><ul><li><a href="#">PT nâng vú bằng túi độn ngực</a> </li><li><a href="#">PT nâng vú bằng chất làm đầy</a></li><li><a href="#">PT treo vú sa trễ</a></li><li><a href="#">PT thu nhỏ vú phì đại</a></li><li><a href="#">PT tái tạo quầng núm vú</a></li></ul><div class="header_kn_1_0_0__dropTitle">Nâng mông</div><ul><li><a href="#">PT làm to mông bằng túi độn</a> </li><li><a href="#">PT cấy mỡ vùng mông</a></li></ul></div><div class="header_kn_1_0_0__dropItem"><div class="header_kn_1_0_0__dropTitle">Hút mỡ</div><ul><li><a href="#">Hút mỡ bụng toàn phần</a> </li><li><a href="#">Hút mỡ đùi</a></li><li><a href="#">Hút mỡ vùng cánh tay</a></li><li><a href="#">Hút mỡ vùng lưng</a></li><li><a href="#">Hút mỡ cằm</a></li><li><a href="#">Hút mỡ má</a></li><li><a href="#">Hút mỡ chân</a></li><li><a href="#">Hút mỡ nách</a></li><li><a href="#">PT tạo hình bụng</a></li><li><a href="#">Tạo bụng 6 múi</a></li></ul></div>',
    },
    {
        cate: "Trẻ hóa",
        image: "images/dv-trehoa.webp",
        dataContent: "tab5",
        iconClass: "tab-icon-6",
        group: '<div class="header_kn_1_0_0__dropItem"><div class="header_kn_1_0_0__dropTitle">Trẻ hóa công nghệ cao</div><ul><li><a href="#">Cấy mỡ Nanofat</a> </li><li><a href="#">Trẻ hóa da toàn diện 4 trong 1</a></li><li><a href="#">Trẻ hóa da Thermage FLX</a></li><li><a href="#">Làm đầy rãnh nhăn</a></li><li><a href="#">Chăm sóc da chuyên sâu</a></li><li><a href="#">Vi kim tảo biển</a></li></ul></div>',
    },
    {
        cate: "Da liễu",
        image: "images/dv-dalieu.webp",
        dataContent: "tab6",
        iconClass: "tab-icon-7",
        group: '<div class="header_kn_1_0_0__dropItem"><div class="header_kn_1_0_0__dropTitle">Điều trị da</div><ul><li><a href="#">Trị nám</a> </li><li><a href="#">Trị tàn nhang</a></li><li><a href="#">Trị sẹo lồi</a></li><li><a href="#">Trị sẹo rỗ</a></li><li><a href="#">Điều trị mụn</a></li><li><a href="#">Trị thâm bằng laser</a></li><li><a href="#">Tẩy nốt ruồi</a></li></ul></div>',
    },
    {
        cate: "Spa",
        image: "images/dv-spa.webp",
        dataContent: "tab7",
        iconClass: "tab-icon-8",
        group: '<div class="header_kn_1_0_0__dropItem"><div class="header_kn_1_0_0__dropTitle">Spa cao cấp</div><ul><li><a href="#">Tắm trắng phi thuyền</a> </li><li><a href="#">Phun môi</a></li><li><a href="#">Phun mí mở tròng</a></li><li><a href="#">Xăm mí mắt</a></li><li><a href="#">Điêu khắc chân mày</a></li><li><a href="#">Thêu chân mày</a></li><li><a href="#">Phun xăm thẩm mỹ</a></li><li><a href="#">Điêu khắc chân mày nam</a></li></ul></div><div class="header_kn_1_0_0__dropItem"><div class="header_kn_1_0_0__dropTitle">Triệt lông</div><ul><li><a href="#">Triệt lông Diode Laser</a> </li><li><a href="#">Triệt lông chân</a></li><li><a href="#">Triệt lông mặt</a></li><li><a href="#">Triệt lông nách</a></li><li><a href="#">Triệt lông tay</a></li><li><a href="#">Triệt ria mép</a></li></ul><div class="header_kn_1_0_0__dropTitle">Dịch vụ khác</div><ul><li><a href="#">Cấy tóc tự thân</a> </li><li><a href="#">Độn thái dương</a></li><li><a href="#">Xóa xăm</a></li><li><a href="#">Trị hôi nách</a></li></ul></div>',
    },
    {
        cate: "Nha khoa",
        image: "images/dv-nhakhoa.webp",
        dataContent: "tab8",
        iconClass: "tab-icon-9",
        group: '<div class="header_kn_1_0_0__dropItem"><div class="header_kn_1_0_0__dropTitle">Nha khoa thẩm mỹ</div><ul><li><a href="#">Bọc răng sứ</a> </li><li><a href="#">Mặt dán sứ Veneer</a></li><li><a href="#">Trám răng thẩm mỹ</a></li><li><a href="#">Tẩy trắng răng</a></li><li><a href="#">Làm cầu răng sứ</a></li><li><a href="#">Chữa cười hở lợi</a></li></ul></div>',
    },
    {
        cate: "Giới thiệu",
        image: "images/dv-gt.webp",
        dataContent: "tab0",
        iconClass: "tab-icon-1",
        group: '<div class="header_kn_1_0_0__dropItem"><div class="header_kn_1_0_0__dropTitle">Về thương hiệu Kangnam</div><ul><li><a href="#">Giới thiệu</a> </li><li><a href="#">Đội ngũ bác sĩ</a></li><li><a href="#">Công nghệ</a></li><li><a href="#">Video dịch vụ</a></li><li><a href="#">Thông tin liên hệ</a></li></ul></div><div class="header_kn_1_0_0__dropItem"><div class="header_kn_1_0_0__dropTitle">Bảng giá & chính sách</div><ul><li><a href="#">Bảng giá dịch vụ thẩm mỹ</a> </li><li><a href="#">Chính sách bảo hành</a></li><li><a href="#">Hình ảnh trước sau khách hàng</a></li></ul></div>',
    },
]

const headerJSON = JSON.stringify(header);
console.log(headerJSON);