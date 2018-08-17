import { RegioesComponent } from './região/regiao.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";



@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        RegioesComponent
    ],
    exports: [
        RegioesComponent
    ]
})
export class RegioesModule{}