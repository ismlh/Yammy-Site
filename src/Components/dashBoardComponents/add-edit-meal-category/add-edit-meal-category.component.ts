import { Component, OnInit } from '@angular/core';
import { IMealCategory } from '../../../Models/imeal-category';
import { MealCategoryService } from '../../../Services/meal-category.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-meal-category',
  standalone: true,
  imports: [CommonModule, FormsModule, JsonPipe],
  templateUrl: './add-edit-meal-category.component.html',
  styleUrl: './add-edit-meal-category.component.css',
})
export class AddEditMealCategoryComponent implements OnInit {
  mealCategory: IMealCategory = {} as IMealCategory;

  addEditButton: boolean = true;
  constructor(
    private _mealCatSer: MealCategoryService,
    private _router: Router,
    private _activeRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this._activeRoute.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id !== '0') {
        this.addEditButton = false;
        this._mealCatSer.getMealCategoryByID(id).subscribe((res) => {
          this.mealCategory = res;
        });
      }
    });
  }

  AddMealCategory() {
    if (this.addEditButton) {
      this._mealCatSer.addCategory(this.mealCategory).subscribe({
        next: () => {
          alert(`Category  ${this.mealCategory.Name} Added`);
          this.mealCategory = {} as IMealCategory;
        },
      });
    } else {
      this._mealCatSer
        .updateCategory(this.mealCategory.id, this.mealCategory)
        .subscribe((res) => {
          alert('Updated ');
          this.addEditButton = true;
        });
    }
    this._router.navigate(['/Dashboard/MealsCategories']);
  }
}
