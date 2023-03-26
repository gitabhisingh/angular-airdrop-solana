import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarAnnotatedComponentComponent } from './snack-bar.component';

describe('SnackBarAnnotatedComponentComponent', () => {
  let component: SnackBarAnnotatedComponentComponent;
  let fixture: ComponentFixture<SnackBarAnnotatedComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SnackBarAnnotatedComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SnackBarAnnotatedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
