import { Component, OnInit } from '@angular/core';
import { MealCategoryService } from '../../../Services/meal-category.service';
import { IMealCategory } from '../../../Models/imeal-category';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-meals-categories',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './meals-categories.component.html',
  styleUrl: './meals-categories.component.css',
})
export class MealsCategoriesComponent implements OnInit {
  mealCategories: IMealCategory[] = [] as IMealCategory[];
  constructor(private _mealCatSer: MealCategoryService) {}
  ngOnInit(): void {
    this.getAllMealCategories();
  }
  getAllMealCategories() {
    this._mealCatSer.getAllMealCategories().subscribe((res) => {
      this.mealCategories = res;
    });
  }

  deleteCategory(id: string) {
    if (confirm('Are You Sure')) {
      this._mealCatSer.deleteMealCategory(id).subscribe((res) => {
        alert('deleted');
        this.getAllMealCategories();
      });
    }
  }
}
