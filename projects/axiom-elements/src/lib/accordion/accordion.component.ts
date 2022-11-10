import { Component, ViewEncapsulation } from '@angular/core';
import { ComponentSpyComponent } from '../component-spy/component-spy.component';

@Component({
  selector: 'axiom-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AccordionComponent extends ComponentSpyComponent {

  getAllowedRules() {
    return [''];
  }

}
