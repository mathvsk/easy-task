import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";

@NgModule({
    declarations: [CardComponent],
    exports: [CardComponent] // Exporta o componente para ser utilizado em outros módulos
})
export class SharedModule { }