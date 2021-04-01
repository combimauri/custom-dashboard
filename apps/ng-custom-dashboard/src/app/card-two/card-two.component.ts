import { Component } from '@angular/core';

import { WidgetComponent } from '../core/widget.model';

@Component({
  selector: 'custom-dashboard-card-two',
  templateUrl: './card-two.component.html',
  styleUrls: ['./card-two.component.scss'],
})
export class CardTwoComponent extends WidgetComponent {}
