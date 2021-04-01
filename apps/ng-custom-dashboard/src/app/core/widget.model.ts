import { Subject } from 'rxjs';

export abstract class WidgetComponent {
  destroy$ = new Subject<void>();

  delete(): void {
    this.destroy$.next();
  }
}
