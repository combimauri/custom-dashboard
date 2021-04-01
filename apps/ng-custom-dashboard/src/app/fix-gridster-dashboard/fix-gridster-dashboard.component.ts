import {
  Component,
  ComponentFactoryResolver,
  OnDestroy,
  ViewContainerRef,
} from '@angular/core';

import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FixItemOneComponent } from './item-one/item-one.component';
import { FixItemTwoComponent } from './item-two/item-two.component';
import { WidgetComponent } from '../core/widget.model';

@Component({
  selector: 'custom-dashboard-fix-gridster-dashboard',
  templateUrl: './fix-gridster-dashboard.component.html',
  styleUrls: ['./fix-gridster-dashboard.component.scss'],
})
export class FixGridsterDashboardComponent implements OnDestroy {
  options: GridsterConfig = {
    minCols: 3,
    maxCols: 3,
    minRows: 3,
    maxRows: 3,
    displayGrid: 'none',
    draggable: {
      enabled: true,
    },
    resizable: {
      enabled: true,
    },
  };
  // prettier-ignore
  dashboard: GridsterItem[] = [
    { cols: 2, rows: 1, y: 0, x: 0, componentClass: FixItemOneComponent },
    // { cols: 1, rows: 1, y: 0, x: 1, componentClass: FixItemTwoComponent },
    { cols: 1, rows: 1, y: 0, x: 2, componentClass: FixItemOneComponent },
    { cols: 1, rows: 1, y: 1, x: 0, componentClass: FixItemTwoComponent },
    { cols: 1, rows: 1, y: 1, x: 1, componentClass: FixItemOneComponent },
    { cols: 1, rows: 1, y: 1, x: 2, componentClass: FixItemTwoComponent },
    { cols: 1, rows: 1, y: 2, x: 0, componentClass: FixItemOneComponent },
    { cols: 2, rows: 1, y: 2, x: 1, componentClass: FixItemTwoComponent },
    // { cols: 1, rows: 1, y: 2, x: 2, dragEnabled: true, componentClass: FixItemOneComponent },
  ];

  private unsubscribe$ = new Subject<void>();

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  addComponent(item: GridsterItem, container: ViewContainerRef): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      item.componentClass
    );
    const component = container.createComponent(componentFactory);

    (component.instance as WidgetComponent).destroy$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => component.destroy());
  }
}
