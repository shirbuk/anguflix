import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngtAlertComponent } from './ingt-alert.component';

describe('IngtAlertComponent', () => {
  let component: IngtAlertComponent;
  let fixture: ComponentFixture<IngtAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngtAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngtAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
