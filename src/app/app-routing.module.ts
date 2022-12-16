import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GiaoVienComponent} from "./loai-sua/giao-vien.component";
import {MonHocComponent} from "./sua/mon-hoc.component";
import {ThemGiaoVienComponent} from "./them-sua/them-giao-vien.component";

const routes: Routes = [
  {path: 'sua', component: GiaoVienComponent},
  {path: 'loaisua', component: MonHocComponent},
  {path: 'them', component: ThemGiaoVienComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
