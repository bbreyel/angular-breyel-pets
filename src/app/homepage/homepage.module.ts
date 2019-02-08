import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';

import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    LayoutModule,
  ],
  exports: [
    HomepageComponent
  ]
})
export class HomepageModule { }
