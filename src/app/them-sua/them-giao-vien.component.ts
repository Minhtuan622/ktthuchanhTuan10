import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Sua} from '../sua';
@Component({
  selector: 'app-them-loai-sua',
  templateUrl: './them-giao-vien.component.html',
  styleUrls: ['./them-giao-vien.component.css']
})
export class ThemGiaoVienComponent implements OnInit {

  products: Sua[] = [];
  selectedProduct: Sua = { masua : 0 , tensua: '', trongluong: '', dongia: '', maloai: 0}
  constructor(private apiService: ApiService) {
    this.apiService.readProducts().subscribe((products: Sua[])=>{
      this.products = products;
      console.log(this.products);
    }) }

  createOrUpdateProduct(form: any){
    form.value.masua = this.selectedProduct.masua;
    form.value.tensua = this.selectedProduct.tensua;
    form.value.trongluong = this.selectedProduct.trongluong;
    form.value.dongia = this.selectedProduct.dongia;
    form.value.maloai = this.selectedProduct.maloai;
    if(this.selectedProduct && this.selectedProduct.masua){
      this.apiService.updateProduct(form.value).subscribe((product: Sua)=>{
        console.log("Product updated" , product);
        this.apiService.readProducts().subscribe((products: Sua[])=>{
          this.products = products;
        })
      });
    }
    else{
      this.apiService.createProduct(form.value).subscribe((product: Sua)=>{
        console.log("Product created, ", product);
        this.apiService.readProducts().subscribe((products: Sua[])=>{
          this.products = products;
        })
      });
    }
  }
  selectProduct(product: Sua){
    this.selectedProduct = product;
  }
  deleteProduct(masua: any){
    this.apiService.deleteProduct(masua).subscribe((product: Sua)=>{
      console.log("Product deleted, ", product);
      this.apiService.readProducts().subscribe((products: Sua[])=>{
        this.products = products;
      })
    });
  }

  ngOnInit(): void {}

}
