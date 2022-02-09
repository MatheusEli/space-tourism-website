import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnoushehComponent } from './anousheh/anousheh.component';
import { CrewComponent } from './crew.component';
import { DouglasComponent } from './douglas/douglas.component';
import { MarkComponent } from './mark/mark.component';
import { VictorComponent } from './victor/victor.component';

const routes: Routes = [
  {
    path: '',
    component: CrewComponent,
    children: [
      {
        path: '',
        redirectTo: 'douglas',
        pathMatch: 'full'
      },
      {
        path: 'douglas',
        component: DouglasComponent
      },
      {
        path: 'mark',
        component: MarkComponent
      },
      {
        path: 'victor',
        component: VictorComponent
      },
      {
        path: 'anousheh',
        component: AnoushehComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrewRoutingModule { }
