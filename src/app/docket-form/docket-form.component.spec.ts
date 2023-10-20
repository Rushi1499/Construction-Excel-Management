import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocketFormComponent } from './docket-form.component';

describe('DocketFormComponent', () => {
  let component: DocketFormComponent;
  let fixture: ComponentFixture<DocketFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocketFormComponent]
    });
    fixture = TestBed.createComponent(DocketFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
