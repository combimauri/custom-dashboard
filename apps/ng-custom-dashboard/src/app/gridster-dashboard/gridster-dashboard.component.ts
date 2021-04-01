import {
  Component,
  ComponentFactoryResolver,
  OnDestroy,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import { GridsterConfig } from 'angular-gridster2';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ItemOneComponent } from './item-one/item-one.component';
import { ItemTwoComponent } from './item-two/item-two.component';
import { GridsterWidgetComponent } from '../core/gridster-widget.component';

@Component({
  selector: 'custom-dashboard-gridster-dashboard',
  templateUrl: './gridster-dashboard.component.html',
  styleUrls: ['./gridster-dashboard.component.scss'],
})
export class GridsterDashboardComponent implements OnDestroy {
  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;
  options: GridsterConfig = {
    minCols: 3,
    maxCols: 3,
    minRows: 3,
    maxRows: 3,
    displayGrid: 'none'
  };
  ItemOneComponent = ItemOneComponent;
  ItemTwoComponent = ItemTwoComponent;

  private unsubscribe$ = new Subject<void>();

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  addComponent(componentClass: Type<GridsterWidgetComponent>): void {
    // Create component dynamically inside the ng-template
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      componentClass
    );
    const component = this.container.createComponent(componentFactory);

    // Delete component from container
    component.instance.destroy$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => component.destroy());
  }
}
