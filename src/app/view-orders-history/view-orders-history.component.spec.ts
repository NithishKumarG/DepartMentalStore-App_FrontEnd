import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrdersHistoryComponent } from './view-orders-history.component';

describe('ViewOrdersHistoryComponent', () => {
  let component: ViewOrdersHistoryComponent;
  let fixture: ComponentFixture<ViewOrdersHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOrdersHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewOrdersHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
