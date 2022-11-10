import { APP_BASE_HREF } from '@angular/common';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import {
  AccordionComponent,
  AlertComponent,
  AxiomElementsModule,
  BadgeComponent,
  BreadcrumbComponent,
  ButtonComponent,
  ButtonGroupComponent,
  CardComponent,
  CarouselComponent,
  CloseButtonComponent,
  DropdownComponent,
  ListGroupComponent,
  ModalComponent,
  NavbarComponent,
  NavComponent,
  PaginationComponent,
  PopoverComponent,
  ProgressComponent,
  SpinnerComponent,
  TabsComponent,
  TestComponent,
  ToastComponent,
  TooltipComponent
} from 'axiom-elements';

const ELEMENTS = [
  { selector: 'axiom-accordion', component: AccordionComponent },
  { selector: 'axiom-alert', component: AlertComponent },
  { selector: 'axiom-badge', component: BadgeComponent },
  { selector: 'axiom-breadcrumb', component: BreadcrumbComponent },
  { selector: 'axiom-button', component: ButtonComponent },
  { selector: 'axiom-button-group', component: ButtonGroupComponent },
  { selector: 'axiom-card', component: CardComponent },
  { selector: 'axiom-carousel', component: CarouselComponent },
  { selector: 'axiom-close-button', component: CloseButtonComponent },
  { selector: 'axiom-dropdown', component: DropdownComponent },
  { selector: 'axiom-list-group', component: ListGroupComponent },
  { selector: 'axiom-modal', component: ModalComponent },
  { selector: 'axiom-navbar', component: NavbarComponent },
  { selector: 'axiom-nav', component: NavComponent },
  { selector: 'axiom-tabs', component: TabsComponent },
  { selector: 'axiom-pagination', component: PaginationComponent },
  { selector: 'axiom-popover', component: PopoverComponent },
  { selector: 'axiom-progress', component: ProgressComponent },
  { selector: 'axiom-spinner', component: SpinnerComponent },
  { selector: 'axiom-toast', component: ToastComponent },
  { selector: 'axiom-tooltip', component: TooltipComponent },
];

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AxiomElementsModule,
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/',
    },
  ],
  bootstrap: [],
})
export class AppModule {

  constructor(private injector: Injector) {

  }

  onBootstrap() {
    for (const element of ELEMENTS) {
      customElements.define(element.selector, createCustomElement(element.component, {
        injector: this.injector,
      }));
    }
  }

  ngDoBootstrap() {
    const styleSheet = document.styleSheets[0]
    const cssRules = styleSheet.cssRules;

    const elementRef = document.getElementsByTagName('body')[0];

    console.log('elementRef', elementRef);

    console.log('elementRef root listening to bootstrap');

    (elementRef as any).addEventListener('bootstrap', ($event: CustomEvent) => {
      console.log(`bootstrapping`, $event);

      var style = document.createElement('style');

      style.innerHTML += '';

      // define per component
      const componentsAllowed = [] as Array<string>;

      // state machine for css rules needed here
      for (let ri = 0; ri < cssRules.length; ++ri) {
        const rule = cssRules[ri];
        style.innerHTML += rule.cssText;
        // console.log(ri, rule, `allowed? ${componentsAllowed.indexOf((rule as CSSStyleRule).selectorText)}`);
        if (componentsAllowed.indexOf((rule as CSSStyleRule).selectorText)) {

        }
      }

      ($event.detail.element as any).shadowRoot.prepend(style);
    });

    (elementRef as any).addEventListener('watch', ($event: CustomEvent) => {
      // we know this is a element
      console.log(`watch`, $event);
    });


    this.onBootstrap();

  }

}
