import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S3FormComponent } from './s3-form.component';

describe('S3FormComponent', () => {
  let component: S3FormComponent;
  let fixture: ComponentFixture<S3FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [S3FormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S3FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
