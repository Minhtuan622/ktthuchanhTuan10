import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { InfoComponent } from './home/info/info.component';
import { MenuComponent } from './home/menu/menu.component';
import { GiaoVienComponent } from './loai-sua/giao-vien.component';
import { MonHocComponent } from './sua/mon-hoc.component';
import { ThemGiaoVienComponent } from './them-sua/them-giao-vien.component';
import {MatCommonModule} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoComponent,
    MenuComponent,
    GiaoVienComponent,
    MonHocComponent,
    ThemGiaoVienComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCommonModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
