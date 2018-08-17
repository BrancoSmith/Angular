import { Component, Input } from '@angular/core';

@Component({
    selector: "agregados",
    templateUrl : "agregados.component.html"
})
export class AgregadosComponent{
    @Input() IBGE = '';
}