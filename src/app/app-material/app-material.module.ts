import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatRippleModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatSelectModule,
    MatRippleModule,
    MatInputModule,
    MatButtonModule,
    MatBadgeModule,
    MatMenuModule,
    MatTabsModule,
    MatCardModule
  ],

  exports: [
    MatIconModule,
    MatSelectModule,
    MatRippleModule,
    MatInputModule,
    MatButtonModule,
    MatBadgeModule,
    MatMenuModule,
    MatTabsModule,
    MatCardModule
  ]
})
export class AppMaterialModule { }
