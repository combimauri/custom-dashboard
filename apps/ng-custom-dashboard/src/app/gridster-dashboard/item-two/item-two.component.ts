import { Component } from '@angular/core';

import { GridsterWidgetComponent } from '../../core/gridster-widget.component';

@Component({
  selector: 'custom-dashboard-item-two',
  templateUrl: './item-two.component.html',
  styleUrls: ['./item-two.component.scss'],
})
export class ItemTwoComponent extends GridsterWidgetComponent {}
