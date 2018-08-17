import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/*export class AppComponent {
  IBGEs: Object[] = []

  constructor(http: HttpClient){

    http.get<Object[]>("https://servicodados.ibge.gov.br/api/v3/agregados").subscribe(
      dados => {this.IBGEs = dados;
      console.log(dados);
      }
    );
  }
}*/

export class AppComponent {
  regioes: Object[] = []

  constructor(http: HttpClient){

    http.get<Object[]>("https://servicodados.ibge.gov.br/api/v1/localidades/mesorregioes").subscribe(
      dados => {this.regioes = dados;
      console.log(dados);
      }
      
    );
  }
}
