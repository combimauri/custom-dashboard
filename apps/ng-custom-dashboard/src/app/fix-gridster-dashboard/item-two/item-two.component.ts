import { Component } from '@angular/core';

import { WidgetComponent } from '../../core/widget.model';

@Component({
  selector: 'custom-dashboard-item-two',
  templateUrl: './item-two.component.html',
  styleUrls: ['./item-two.component.scss'],
})
export class FixItemTwoComponent extends WidgetComponent {}
