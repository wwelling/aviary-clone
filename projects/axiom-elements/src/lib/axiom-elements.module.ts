import { NgModule } from '@angular/core';

import { TestComponent } from './test/test.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AlertComponent } from './alert/alert.component';
import { BadgeComponent } from './badge/badge.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ButtonComponent } from './button/button.component';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { CardComponent } from './card/card.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CloseButtonComponent } from './close-button/close-button.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { ModalComponent } from './modal/modal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavComponent } from './nav/nav.component';
import { TabsComponent } from './tabs/tabs.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PopoverComponent } from './popover/popover.component';
import { ProgressComponent } from './progress/progress.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ToastComponent } from './toast/toast.component';
import { TooltipComponent } from './tooltip/tooltip.component';

const COMPONENTS = [
  AccordionComponent,
  AlertComponent,
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
  TabsComponent,
  PaginationComponent,
  PopoverComponent,
  ProgressComponent,
  SpinnerComponent,
  TestComponent,
  ToastComponent,
  TooltipComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [],
  exports: [
    ...COMPONENTS,
  ],
})
export class AxiomElementsModule { }
