import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchVehicleComponent } from './launch-vehicle/launch-vehicle.component';
import { SpaceCapsuleComponent } from './space-capsule/space-capsule.component';
import { SpaceportComponent } from './spaceport/spaceport.component';
import { TechComponent } from './tech.component';

const routes: Routes = [
  {
    path: '',
    component: TechComponent,
    children: [
      {
        path: '',
        redirectTo: 'launch-vehicle',
        pathMatch: 'full'
      },
      {
        path: 'launch-vehicle',
        component: LaunchVehicleComponent
      },
      {
        path: 'spaceport',
        component: SpaceportComponent
      },
      {
        path: 'space-capsule',
        component: SpaceCapsuleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechRoutingModule { }
