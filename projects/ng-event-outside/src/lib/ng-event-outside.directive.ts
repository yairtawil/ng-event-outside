import { Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { AutoSubscriptions, AutoSubscription } from 'auto-subscriptions';
import { tap } from 'rxjs/operators';

@Directive({
  selector: '[ngEventOutside]'
})
@AutoSubscriptions({
  init: 'ngOnInit',
  destroy: 'ngOnDestroy'
})
export class EventOutsideDirective implements OnInit, OnDestroy {
  @Output() ngEventOutside = new EventEmitter();
  @Input() excludes = [];
  @Input() eventListener = 'click';

  @AutoSubscription
  event: () => Observable<any> = () => {
    return fromEvent(window, this.eventListener).pipe(
      tap(($event: any) => {
        setTimeout(() => {
          const self = $event.path.includes(this.elementRef.nativeElement);
          const trigger = $event.path.some((e) => this.excludes.includes(e));
          if (!self && !trigger) {
            this.ngEventOutside.emit($event);
          }
        }, 0);

      })
    )};

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

  constructor(public elementRef: ElementRef) {
  }

}
