import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AnoushehComponent } from './anousheh/anousheh.component';
import { CrewRoutingModule } from './crew-routing.module';
import { CrewComponent } from './crew.component';
import { DouglasComponent } from './douglas/douglas.component';
import { MarkComponent } from './mark/mark.component';
import { VictorComponent } from './victor/victor.component';

@NgModule({
  declarations: [
    CrewComponent,
    DouglasComponent,
    MarkComponent,
    VictorComponent,
    AnoushehComponent
  ],
  imports: [
      CommonModule,
      CrewRoutingModule
  ],
  providers: []
})
export class CrewModule { }
