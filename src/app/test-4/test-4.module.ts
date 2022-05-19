import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Test4RoutingModule } from './test-4-routing.module';
import { TempComponent } from './temp/temp.component';


@NgModule({
  declarations: [
    TempComponent
  ],
  imports: [
    CommonModule,
    Test4RoutingModule
  ]
})
export class Test4Module { }
