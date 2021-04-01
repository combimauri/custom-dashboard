import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[customDashboardComponentContainer]',
  exportAs: 'componentContainer'
})
export class ComponentContainerDirective {
  constructor(public container: ViewContainerRef) {}
}
