import { Directive, TemplateRef } from '@angular/core';


@Directive({
  selector: '[fsDialogTitle]',
})
export class FsDialogTitleDirective {

  public static ngTemplateContextGuard(
    directive: FsDialogTitleDirective,
    context: unknown,
  ): context is {
    titlesTemplate: TemplateRef<any>,
    backTemplate: TemplateRef<any>,
    actionsTemplate: TemplateRef<any>,
  } {
    return true;
  }

}
