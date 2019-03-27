import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelSpecificationFormComponent } from './label-specification-form.component';

describe('LabelSpecificationFormComponent', () => {
  let component: LabelSpecificationFormComponent;
  let fixture: ComponentFixture<LabelSpecificationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelSpecificationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelSpecificationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
