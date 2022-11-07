import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastreProductComponent } from './cadastre-product.component';

describe('CadastreProductComponent', () => {
  let component: CadastreProductComponent;
  let fixture: ComponentFixture<CadastreProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastreProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastreProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
