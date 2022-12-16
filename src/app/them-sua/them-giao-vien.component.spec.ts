import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemGiaoVienComponent } from './them-giao-vien.component';

describe('ThemGiaoVienComponent', () => {
  let component: ThemGiaoVienComponent;
  let fixture: ComponentFixture<ThemGiaoVienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemGiaoVienComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemGiaoVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
