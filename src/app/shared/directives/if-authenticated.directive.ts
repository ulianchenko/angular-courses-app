import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfAuthenticated]'
})
export class IfAuthenticatedDirective {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private templateRef: TemplateRef<any>,
    // eslint-disable-next-line no-unused-vars
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set appIfAuthenticated(condition: boolean) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
