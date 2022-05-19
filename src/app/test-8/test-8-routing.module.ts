import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TempComponent } from './temp/temp.component';

const routes: Routes = [
  {path: 'temp', component: TempComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'temp'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Test8RoutingModule { }
