import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideTop } from './slide-top';

describe('SlideTop', () => {
  let component: SlideTop;
  let fixture: ComponentFixture<SlideTop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideTop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideTop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
