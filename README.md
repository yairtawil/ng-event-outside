# ng-event-outside

[![NPM](https://nodei.co/npm/ng-event-outside.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/ng-event-outside/)

**[Demo](https://yairtawil.github.io/ng-event-outside/)**


## Installation

```shell
npm install ng-event-outside
```

## Usage

Add `NgEventOutside` to your list of module imports:

```typescript
import { NgEventOutsideModule  } from 'ng-event-outside';

@NgModule({
  imports: [
    ...
    NgEventOutside
],
...
})
export class AppModule { }

```
Use the `ngEventOutside` directive in your html templates:

```html
  <button (click)="toggleShow()"> Show <button>
  <div ngIf="*show" (ngEventOutside)="onEventOutside($event)"></div>
```

```typescript
export class AppComponent {
  toggleShow() {
    this.show = !this.show;
  }
  
  onEventOutside($event) {
    this.show = false;
  }
}
```

### Outputs
name | description
--- | --- 
```(ngEventOutside)``` | This event fires when `[eventListener]` invoked outside.     

### Inputs
Name | Type | Default | Description
--- | --- | --- | ---
`[excludes]` | ```HTMLElement[]``` | ```[]``` | An array of excluded elements.  
`[eventListener]` | ```string``` | 'click' | A String that specifies the name of the HTML DOM event.  

  
