import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLessonComponent } from './first-lesson.component';

describe('FirstLessonComponent', () => {
  let component: FirstLessonComponent;
  let fixture: ComponentFixture<FirstLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstLessonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
