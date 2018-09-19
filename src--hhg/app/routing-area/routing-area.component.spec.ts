import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingAreaComponent } from './routing-area.component';

describe('RoutingAreaComponent', () => {
  let component: RoutingAreaComponent;
  let fixture: ComponentFixture<RoutingAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
