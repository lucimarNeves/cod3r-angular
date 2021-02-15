import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutcUpdateComponent } from './produtc-update.component';

describe('ProdutcUpdateComponent', () => {
  let component: ProdutcUpdateComponent;
  let fixture: ComponentFixture<ProdutcUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutcUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutcUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
