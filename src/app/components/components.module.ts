import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
// import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [BannerComponent],
  // declarations: [AboutComponent]
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
