import { AgregadosComponent } from './agregado/agregados.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AgregadosComponent
   ],
  exports:[
    AgregadosComponent
  ]
   
})
export class AgregadosModule { }
