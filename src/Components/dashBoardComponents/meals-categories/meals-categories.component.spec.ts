import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsCategoriesComponent } from './meals-categories.component';

describe('MealsCategoriesComponent', () => {
  let component: MealsCategoriesComponent;
  let fixture: ComponentFixture<MealsCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealsCategoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
