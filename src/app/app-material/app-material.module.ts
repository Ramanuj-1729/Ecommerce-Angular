import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';

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
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatListModule,
    MatSliderModule,
    MatGridListModule,
    MatPaginatorModule,
    MatDialogModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTableModule
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
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatListModule,
    MatSliderModule,
    MatGridListModule,
    MatPaginatorModule,
    MatDialogModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTableModule
  ]
})
export class AppMaterialModule { }
