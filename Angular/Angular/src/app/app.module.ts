import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AgregadosModule } from './agregados/agregados.module';
import { RegioesModule } from './regiões/regioes.mudule';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgregadosModule,
    RegioesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
