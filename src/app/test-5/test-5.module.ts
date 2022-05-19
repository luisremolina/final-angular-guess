import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Test5RoutingModule } from './test-5-routing.module';
import { TempComponent } from './temp/temp.component';


@NgModule({
  declarations: [
    TempComponent
  ],
  imports: [
    CommonModule,
    Test5RoutingModule
  ]
})
export class Test5Module { }
