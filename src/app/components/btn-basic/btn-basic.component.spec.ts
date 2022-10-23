import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBasicComponent } from './btn-basic.component';

describe('BtnBasicComponent', () => {
  let component: BtnBasicComponent;
  let fixture: ComponentFixture<BtnBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
