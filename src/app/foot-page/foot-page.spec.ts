import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootPage } from './foot-page';

describe('FootPage', () => {
  let component: FootPage;
  let fixture: ComponentFixture<FootPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FootPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
