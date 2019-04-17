import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.scss']
})
export class PlaceDetailComponent implements OnInit {

  tourName = "KHÁM PHÁ QUẦN ĐẢO NAM DU";
  tourSchedule = [
    {
      day: 1,
      content: "Cần Thơ - Rạch Giá - Nam Du",
      morning: "03h00 sáng, xe và hướng dẫn viên PHƯƠNG BÌNH TOURIST đón Quý khách tại điểm hẹn khởi hành đi Rạch Giá - Kiên Giang. Hướng dẫn sẽ sinh hoạt và tổ chức trò chơi trên xe. Quý khách nghỉ ngơi trên xe. Đến Tp. Rạch Giá, Quý khách dùng điểm tâm sáng. Sau đó xe đưa Quý khách đến bến tàu Rạch Giá làm thủ tục lên tàu để đến Nam Du. Quý khách ngắm nhìn đường dây điện vượt biển trên không đầu tiên được thực hiện tại Việt Nam dài khoảng 13km từ đất liền ra đảo Hòn Tre, chiêm ngưỡng cảnh đẹp của Hòn Tre, Hòn Sơn xuất hiện lần lượt trên biển.",
      noon: "Tàu cập cảng Quần đảo Nam Du, Quý khách đến nhà hàng dùng cơm trưa sau đó về nhà nghỉ nhận phòng nghỉ ngơi.",
      afternoon: "Đoàn ra bến tàu khởi hành đi Hòn Ngang, tham quan làng cá biển của người ngư dân và tìm hiểu về cách nuôi cá bóp, cá bóng mú của người dân tại đây. Sau đó đoàn khởi hành đi Hòn Mấu - bãi tắm đẹp nhất của Quần đảo Nam Du với các bãi tắm đặc sắc: bãi Nồm, bãi Đá Đen, bãi Đá Trắng… Rời Hòn Mấu, đoàn đến Hòn Hai Bờ Đập - nơi có rạn san hô đẹp nhất ở đảo để Quý khách lặn ngắm san hô, thưởng thức cháo nhum nổi tiếng và các loại hải sản tại Nam Du. Tàu đưa Quý khách trở lại Hòn Lớn, Quý khách dùng cơm chiều tại nhà hàng với các món ăn đặc sản địa phương như: ghẹ, mực, ốc…",
      night: "Quý khách tự do khám phá quần đảo Nam Du về đêm hoặc có thể thưởng thức rất nhiều loại hải sản tươi sống - giá cả phải chăng tại bến tàu."
    },
    {
      day: 2,
      content: "Quần đảo Nam Du - Rạch Giá - Cần Thơ",
      morning: "Quý khách dùng điểm tâm sáng, sau đó Quý khách tản bộ lên đỉnh Hòn Lớn cao 295m và ngắm toàn cảnh Quần Đảo Nam Du từ trên cao. Quý khách tản bộ tham quan hồ nước ngọt xã An Sơn - công trình do cựu Chủ tịch nước Trần Đức Lương trao tặng. Quý khách tự do tìm hiểu cuộc sống sinh hoạt của người dân trên đảo, mua đặc sản về làm quà cho gia đình và người thân.",
      noon: "Quý khách làm thủ tục trả phòng, dùng cơm trưa. Quý khách di chuyển ra bến tàu khởi hành về Rạch Giá. Tàu cập cảng Rạch Giá. Xe đón đoàn để khởi hành về lại Cần Thơ.",
      afternoon: "Đến Cần Thơ, Quý khách ăn nhẹ bữa chiều - nghỉ ngơi. Sau đó tiếp tục hành trình -xe đưa Quý khách về lại điểm đón ban đầu - kết thúc chương trình tham quan - chia tay đoàn và hẹn gặp lại."
    }
  ]
  listPlace = [
    {
      name: "Cần Thơ"
    },
    {
      name: "Rạch Giá"
    },
    {
      name: "Cần Thơ"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
