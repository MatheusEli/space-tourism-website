import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImgTechService } from '../shared/services/img-tech-service';
import { LaunchVehicleComponent } from './launch-vehicle/launch-vehicle.component';
import { SpaceCapsuleComponent } from './space-capsule/space-capsule.component';
import { SpaceportComponent } from './spaceport/spaceport.component';
import { TechRoutingModule } from './tech-routing.module';
import { TechComponent } from './tech.component';

@NgModule({
  declarations: [
    TechComponent,
    LaunchVehicleComponent,
    SpaceCapsuleComponent,
    SpaceportComponent
  ],
  imports: [
      CommonModule,
      TechRoutingModule
  ],
  providers: [
    ImgTechService
  ]
})
export class TechModule { }
