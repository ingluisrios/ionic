import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrupogastosPageRoutingModule } from './grupogastos-routing.module';

import { GrupogastosPage } from './grupogastos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrupogastosPageRoutingModule
  ],
  declarations: [GrupogastosPage]
})
export class GrupogastosPageModule {}
