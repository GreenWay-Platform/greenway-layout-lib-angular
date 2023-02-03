import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/** Angular Material */
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';

/** Components */
import { GreenwayLeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';



@NgModule({
  declarations: [
    
    /** Components */
    GreenwayLeftSidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    /** Angular Material */
    MatTabsModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
  ],
  exports: [
    GreenwayLeftSidebarComponent
  ]
})
export class GreenwayLayoutCoreModule { }
