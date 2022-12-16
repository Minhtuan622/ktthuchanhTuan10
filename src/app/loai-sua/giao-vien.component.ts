import { Component, OnInit } from '@angular/core';
interface Giaovien {
  magv: string,
  hovaten: string,
  gioitinh: string,
  sdt: string,
  diachi: string
}
@Component({
  selector: 'app-loai-sua',
  templateUrl: './giao-vien.component.html',
  styleUrls: ['./giao-vien.component.css']
})
export class GiaoVienComponent implements OnInit {
  public giaovien: Giaovien[] = [
    {magv: "gv001", hovaten: "Nguyễn Mai Huy", gioitinh: "nam", sdt: '0987654321', diachi: "TP HCM"},
    {magv: "gv002", hovaten: "Đỗ Hoàng Nam", gioitinh: "nam", sdt: '0987654321', diachi: "TP HCM"},
    {magv: "gv003", hovaten: "Giang Hào Côn", gioitinh: "nam", sdt: '0987654321', diachi: "TP HCM"},
    {magv: "gv004", hovaten: "Thái Trúc Nhi", gioitinh: "nữ", sdt: '0987654321', diachi: "TP HCM"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
