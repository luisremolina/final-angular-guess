import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Test8RoutingModule } from './test-8-routing.module';
import { TempComponent } from './temp/temp.component';


@NgModule({
  declarations: [
    TempComponent
  ],
  imports: [
    CommonModule,
    Test8RoutingModule
  ]
})
export class Test8Module { }
