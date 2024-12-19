import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditMealCategoryComponent } from './add-edit-meal-category.component';

describe('AddEditMealCategoryComponent', () => {
  let component: AddEditMealCategoryComponent;
  let fixture: ComponentFixture<AddEditMealCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditMealCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditMealCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
