import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTopBar } from './menu-top-bar';

describe('MenuTopBar', () => {
  let component: MenuTopBar;
  let fixture: ComponentFixture<MenuTopBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuTopBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuTopBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
