import { AfterViewInit, Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  template: ``,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ComponentSpyComponent implements OnInit, AfterViewInit {

  constructor(private elemRef: ElementRef) {

  }

  ngOnInit() {
    const bodyElementRef = document.getElementsByTagName('body')[0];

    bodyElementRef.dispatchEvent(new CustomEvent('bootstrap', {
      detail: {
        message: `${this.elemRef.nativeElement.tagName} wants to bootstrap`,
        element: this.elemRef.nativeElement
      },
    }));
  }

  ngAfterViewInit(): void {
    const bodyElementRef = document.getElementsByTagName('body')[0];

    bodyElementRef.dispatchEvent(new CustomEvent('watch', {
      detail: {
        message: `${this.elemRef.nativeElement.tagName} wants to be watched`,
        element: this.elemRef.nativeElement
      },
    }));
  }

}