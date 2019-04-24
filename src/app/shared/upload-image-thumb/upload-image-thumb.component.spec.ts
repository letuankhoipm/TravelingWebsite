import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadImageThumbComponent } from './upload-image-thumb.component';

describe('UploadImageThumbComponent', () => {
  let component: UploadImageThumbComponent;
  let fixture: ComponentFixture<UploadImageThumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadImageThumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadImageThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
