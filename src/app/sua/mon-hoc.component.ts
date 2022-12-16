import { Component, OnInit } from '@angular/core';
interface LoaiSua {
  ma: number,
  tensua: string,
  hinh: string
}
@Component({
  selector: 'app-sua',
  templateUrl: './mon-hoc.component.html',
  styleUrls: ['./mon-hoc.component.css']
})
export class MonHocComponent implements OnInit {
  public loaisua: LoaiSua[] = [
    {ma: 1, tensua: "Sữa bột", hinh: "https://th.bing.com/th/id/R.66bafca5c5683da4a4cbc64552deee2f?rik=U45M1RuQ%2bSC%2bjA&pid=ImgRaw&r=0"},
    {ma: 2, tensua: "Sữa chua", hinh: "https://th.bing.com/th/id/OIP.eR_w3qdxz2rGh-tabEJpJQHaE7?pid=ImgDet&rs=1"},
    {ma: 3, tensua: "Sữa tươi", hinh: "https://toshiko.vn/wp-content/uploads/2021/01/sua-tuoi-khong-duong.jpg"},
    {ma: 4, tensua: "Sữa đặc", hinh: "https://th.bing.com/th/id/R.36fedf855de58a25064c8b84151d0a41?rik=4Ny%2fDPVR3l1IpQ&pid=ImgRaw&r=0"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
