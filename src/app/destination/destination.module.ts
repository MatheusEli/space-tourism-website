import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImgPathService } from '../shared/services/img-path-service';
import { DestinationRoutingModule } from './destination-routing.module';
import { DestinationComponent } from './destination.component';
import { EuropaComponent } from './europa/europa.component';
import { MarsComponent } from './mars/mars.component';
import { MoonComponent } from './moon/moon.component';
import { TitanComponent } from './titan/titan.component';

@NgModule({
  declarations: [
    DestinationComponent,
    MoonComponent,
    MarsComponent,
    EuropaComponent,
    TitanComponent
  ],
  imports: [
      CommonModule,
      DestinationRoutingModule
  ],
  providers: [ImgPathService]
})
export class DestinationModule { }
