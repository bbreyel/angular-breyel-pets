import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PageHeadingComponent } from './page-heading/page-heading.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { PageContentComponent } from './page-content/page-content.component';


@NgModule({
  declarations: [NavBarComponent, PageHeadingComponent, PageLayoutComponent, PageContentComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    NavBarComponent,
    PageHeadingComponent,
    PageLayoutComponent,
    PageContentComponent
  ]
})
export class LayoutModule { }
