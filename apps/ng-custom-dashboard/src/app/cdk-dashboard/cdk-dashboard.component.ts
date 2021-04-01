import { CdkDragDrop } from '@angular/cdk/drag-drop';
import {
  Component,
  ComponentFactoryResolver,
  OnDestroy,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CardComponent } from '../card/card.component';
import { CardTwoComponent } from '../card-two/card-two.component';
import { WidgetComponent } from '../core/widget.model';

@Component({
  selector: 'custom-dashboard-cdk-dashboard',
  templateUrl: './cdk-dashboard.component.html',
  styleUrls: ['./cdk-dashboard.component.scss'],
})
export class CdkDashboardComponent implements OnDestroy {
  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  // Expose class so that it can be used in the template
  CardComponent = CardComponent;
  CardTwoComponent = CardTwoComponent;

  private unsubscribe$ = new Subject<void>();

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  addComponent(componentClass: Type<WidgetComponent>): void {
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

  drop({ previousIndex, currentIndex }: CdkDragDrop<string[]>) {
    const viewRef = this.container.detach(previousIndex);
    this.container.insert(viewRef, currentIndex);
  }
}
