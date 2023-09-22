import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GrupogastosPage } from './grupogastos.page';

describe('GrupogastosPage', () => {
  let component: GrupogastosPage;
  let fixture: ComponentFixture<GrupogastosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GrupogastosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
