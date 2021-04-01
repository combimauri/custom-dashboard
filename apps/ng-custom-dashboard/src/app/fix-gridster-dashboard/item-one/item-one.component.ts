import { Component } from '@angular/core';

import { WidgetComponent } from '../../core/widget.model';

@Component({
  selector: 'custom-dashboard-item-one',
  templateUrl: './item-one.component.html',
  styleUrls: ['./item-one.component.scss'],
})
export class FixItemOneComponent extends WidgetComponent {}
