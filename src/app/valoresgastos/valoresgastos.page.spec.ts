import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValoresgastosPage } from './valoresgastos.page';

describe('ValoresgastosPage', () => {
  let component: ValoresgastosPage;
  let fixture: ComponentFixture<ValoresgastosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ValoresgastosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
