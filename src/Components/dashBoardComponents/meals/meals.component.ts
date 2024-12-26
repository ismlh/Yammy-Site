import { Component, OnInit } from '@angular/core';
import { IMeal } from '../../../Models/imeal';
import { MealsService } from '../../../Services/meals.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-meals',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink,SweetAlert2Module],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.css',
})
export class MealsComponent implements OnInit {
  Meals: IMeal[] = [] as IMeal[];

  constructor(private _mealService: MealsService) {}

  ngOnInit(): void {
    this.getAllMeals();
  }

  getAllMeals() {
    this._mealService.getAllMeals().subscribe({
      next: (res) => {
        this.Meals = res;
      },
      error: () => Swal.fire('Error Please Run Json-Server File'),
    });
  }

  deleteMeal(id: string) {
    if (confirm('Are You Sure')) {
      this._mealService.deleteMeal(id).subscribe((res) => {
        this.getAllMeals();
        Swal.fire(res.Name + ' Deleted');
      });
    }
  }
}
