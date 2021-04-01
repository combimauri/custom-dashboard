import { Component } from '@angular/core';

import { WidgetComponent } from '../core/widget.model';

@Component({
  selector: 'custom-dashboard-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent extends WidgetComponent {}
