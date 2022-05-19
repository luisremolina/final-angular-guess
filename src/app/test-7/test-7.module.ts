import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Test7RoutingModule } from './test-7-routing.module';
import { TempComponent } from './temp/temp.component';


@NgModule({
  declarations: [
    TempComponent
  ],
  imports: [
    CommonModule,
    Test7RoutingModule
  ]
})
export class Test7Module { }
