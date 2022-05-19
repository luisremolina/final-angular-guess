import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Test3RoutingModule } from './test-3-routing.module';
import { TempComponent } from './temp/temp.component';


@NgModule({
  declarations: [
    TempComponent
  ],
  imports: [
    CommonModule,
    Test3RoutingModule
  ]
})
export class Test3Module { }
