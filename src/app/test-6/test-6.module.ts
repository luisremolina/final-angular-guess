import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Test6RoutingModule } from './test-6-routing.module';
import { TempComponent } from './temp/temp.component';


@NgModule({
  declarations: [
    TempComponent
  ],
  imports: [
    CommonModule,
    Test6RoutingModule
  ]
})
export class Test6Module { }
