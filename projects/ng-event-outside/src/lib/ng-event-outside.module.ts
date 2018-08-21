import { NgModule } from '@angular/core';
import { EventOutsideDirective } from './ng-event-outside.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [EventOutsideDirective],
  exports: [EventOutsideDirective]
})
export class NgEventOutsideModule { }
