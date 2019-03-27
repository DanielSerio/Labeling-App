import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SterilityFormComponent } from './sterility-form.component';

describe('SterilityFormComponent', () => {
  let component: SterilityFormComponent;
  let fixture: ComponentFixture<SterilityFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SterilityFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SterilityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
