import { Component, OnInit } from '@angular/core';
import { IMeal } from '../../../Models/imeal';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IMealCategory } from '../../../Models/imeal-category';
import { MealCategoryService } from '../../../Services/meal-category.service';
import { MealsService } from '../../../Services/meals.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-edit-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-edit-component.component.html',
  styleUrl: './add-edit-component.component.css',
})
export class AddEditComponentComponent implements OnInit {
  mealObj: IMeal = {} as IMeal;
  mealCategories: IMealCategory[] = [] as IMealCategory[];

  meals: IMeal[] = [] as IMeal[];

  imgSelected: boolean = false;

  addEditButton: boolean = true;

  constructor(
    private _mealCatSer: MealCategoryService,
    private _mealService: MealsService,
    private _router: Router,
    private _activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activeRoute.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id !== '0') {
        this.imgSelected = true;
        this.addEditButton = false;
        this._mealService.getMealByID(id).subscribe((res) => {
          this.mealObj = res;
          this.mealObj.ImageUrl = res.ImageUrl;
        });
      }
    });
    this.getAllMealCategories();
    this.getAllMeals();
  }

  getAllMealCategories() {
    this._mealCatSer.getAllMealCategories().subscribe((res) => {
      this.mealCategories = res;
    });
  }

  getAllMeals() {
    this._mealService.getAllMeals().subscribe((res) => {
      this.meals = res;
    });
  }

  onFileSelected(event: Event): void {
    this.imgSelected = true;
    const file = (event.target as HTMLInputElement)?.files?.[0]; // Get the selected file

    if (file) {
      const reader = new FileReader();

      // Convert the image file to Base64
      reader.onload = () => {
        this.mealObj.ImageUrl = reader.result as string; // Store Base64 string for saving
      };
      reader.readAsDataURL(file);
    }
  }

  AddMeal() {
    if (this.addEditButton) {
      this.mealObj.id =(this.meals.length+1).toString();
      this._mealService.addMeal(this.mealObj).subscribe({
        next: () => {
          Swal.fire(`Meal ${this.mealObj.Name} Added`);
          this.mealObj = {} as IMeal;
          this.imgSelected = false;
        },
      });
    } else {
      this._mealService
        .editMeal(this.mealObj.id, this.mealObj)
        .subscribe((res) => {
          Swal.fire(res.Name + ' Updated ');
          this.addEditButton = true;
        });
    }
    this._router.navigate(['/Dashboard/Meals']);
  }
}
