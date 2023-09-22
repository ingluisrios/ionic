import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'gastos',
    loadChildren: () => import('./gastos/gastos.module').then( m => m.GastosPageModule)
  },
  {
    path: 'grupogastos',
    loadChildren: () => import('./grupogastos/grupogastos.module').then( m => m.GrupogastosPageModule)
  },
  {
    path: 'grupos',
    loadChildren: () => import('./grupos/grupos.module').then( m => m.GruposPageModule)
  },
  {
    path: 'valoresgastos',
    loadChildren: () => import('./valoresgastos/valoresgastos.module').then( m => m.ValoresgastosPageModule)
  },
  {
    path: 'ingresarpago/:id',
    loadChildren: () => import('./ingresarpago/ingresarpago.module').then( m => m.IngresarpagoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
