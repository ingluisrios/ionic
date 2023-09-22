import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresarpagoPageRoutingModule } from './ingresarpago-routing.module';

import { IngresarpagoPage } from './ingresarpago.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresarpagoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [IngresarpagoPage]
})
export class IngresarpagoPageModule {}
