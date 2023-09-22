import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValoresgastosPageRoutingModule } from './valoresgastos-routing.module';

import { ValoresgastosPage } from './valoresgastos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValoresgastosPageRoutingModule
  ],
  declarations: [ValoresgastosPage]
})
export class ValoresgastosPageModule {}
