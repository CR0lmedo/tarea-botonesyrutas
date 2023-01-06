import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParametroRutaPageRoutingModule } from './parametro-ruta-routing.module';

import { ParametroRutaPage } from './parametro-ruta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParametroRutaPageRoutingModule
  ],
  declarations: [ParametroRutaPage]
})
export class ParametroRutaPageModule {}
