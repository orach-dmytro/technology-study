import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForbiddenAccessPageComponent } from './forbidden-access-page.component';

describe('ForbiddenAccessPageComponent', () => {
  let component: ForbiddenAccessPageComponent;
  let fixture: ComponentFixture<ForbiddenAccessPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForbiddenAccessPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForbiddenAccessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
