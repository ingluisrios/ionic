import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValoresgastosPage } from './valoresgastos.page';

const routes: Routes = [
  {
    path: '',
    component: ValoresgastosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValoresgastosPageRoutingModule {}
