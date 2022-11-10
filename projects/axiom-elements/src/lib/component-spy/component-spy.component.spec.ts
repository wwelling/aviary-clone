import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSpyComponent } from './component-spy.component';

describe('ComponentSpyComponent', () => {
  let component: ComponentSpyComponent;
  let fixture: ComponentFixture<ComponentSpyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentSpyComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentSpyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
