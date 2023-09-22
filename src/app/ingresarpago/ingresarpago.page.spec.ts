import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngresarpagoPage } from './ingresarpago.page';

describe('IngresarpagoPage', () => {
  let component: IngresarpagoPage;
  let fixture: ComponentFixture<IngresarpagoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IngresarpagoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
