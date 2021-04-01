import { Component } from '@angular/core';

import { GridsterWidgetComponent } from '../../core/gridster-widget.component';

@Component({
  selector: 'custom-dashboard-item-one',
  templateUrl: './item-one.component.html',
  styleUrls: ['./item-one.component.scss'],
})
export class ItemOneComponent extends GridsterWidgetComponent {}
