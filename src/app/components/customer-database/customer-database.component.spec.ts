import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDatabaseComponent } from './customer-database.component';

describe('CustomerDatabaseComponent', () => {
  let component: CustomerDatabaseComponent;
  let fixture: ComponentFixture<CustomerDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerDatabaseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
