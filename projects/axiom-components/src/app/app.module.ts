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
  { selector: 'axiom-test', component: TestComponent },
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
      useValue: '/components/',
    },
  ],
  bootstrap: [],
})
export class AppModule {

  constructor(injector: Injector) {
    for (const element of ELEMENTS) {
      customElements.define(element.selector, createCustomElement(element.component, {
        injector,
      }));
    }
  }

  ngDoBootstrap() {

  }

}
