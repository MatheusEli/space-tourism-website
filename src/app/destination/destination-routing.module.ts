import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationComponent } from './destination.component';
import { EuropaComponent } from './europa/europa.component';
import { MarsComponent } from './mars/mars.component';
import { MoonComponent } from './moon/moon.component';
import { TitanComponent } from './titan/titan.component';

const routes: Routes = [
  {
    path: '',
    component: DestinationComponent,
    children: [
      {
        path: '',
        redirectTo: 'moon',
        pathMatch: 'full'
      },
      {
        path: 'moon',
        component: MoonComponent
      },
      {
        path: 'mars',
        component: MarsComponent
      },
      {
        path: 'europa',
        component: EuropaComponent
      },
      {
        path: 'titan',
        component: TitanComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestinationRoutingModule { }
