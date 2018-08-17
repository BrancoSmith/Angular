import {  Component, Input } from "@angular/core";


@Component({
    selector: "regioes",
    templateUrl: "regiao.component.html"
})
export class RegioesComponent{
    @Input() regiao ="";
}