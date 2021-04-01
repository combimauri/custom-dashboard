import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [DragDropModule, MatCardModule, MatButtonModule, MatIconModule],
  exports: [DragDropModule, MatCardModule, MatButtonModule, MatIconModule],
})
export class MaterialModule {}
