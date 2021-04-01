import { GridsterItem } from 'angular-gridster2';
import { Subject } from 'rxjs';

export abstract class GridsterWidgetComponent {
  gridProperties: GridsterItem = {
    cols: 1,
    rows: 1,
    y: 0,
    x: 0,
    dragEnabled: true,
    resizeEnabled: true
  };
  destroy$ = new Subject<void>();

  delete(): void {
    this.destroy$.next();
  }
}
