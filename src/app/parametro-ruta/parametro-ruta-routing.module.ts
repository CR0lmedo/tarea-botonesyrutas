import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParametroRutaPage } from './parametro-ruta.page';

const routes: Routes = [
  {
    path: '',
    component: ParametroRutaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParametroRutaPageRoutingModule {}
