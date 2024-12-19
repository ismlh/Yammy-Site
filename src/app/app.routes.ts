import { Routes } from '@angular/router';
import { DashboardComponent } from '../Components/dashBoardComponents/dashboard/dashboard.component';
import { MealsComponent } from '../Components/dashBoardComponents/meals/meals.component';
import { NotFoundComponent } from '../Components/HomeComponents/not-found/not-found.component';
import { MealsCategoriesComponent } from '../Components/dashBoardComponents/meals-categories/meals-categories.component';
import { ChefsComponent } from '../Components/dashBoardComponents/chefs/chefs.component';
import { BookingTablesComponent } from '../Components/dashBoardComponents/booking-tables/booking-tables.component';
import { MessagesComponent } from '../Components/dashBoardComponents/messages/messages.component';
import { AddEditComponentComponent } from '../Components/dashBoardComponents/add-edit-component/add-edit-component.component';
import { AddEditMealCategoryComponent } from '../Components/dashBoardComponents/add-edit-meal-category/add-edit-meal-category.component';

export const routes: Routes = [
  // first Match Wins

  {
    path: 'Dashboard',

    children: [
      { path: '', pathMatch: 'full', redirectTo: 'Meals' },

      { path: 'Meals', component: MealsComponent },

      { path: 'AddEditComponent/:id', component: AddEditComponentComponent },

      { path: 'MealsCategories', component: MealsCategoriesComponent },

      {
        path: 'AddEditMealsCategories/:id',
        component: AddEditMealCategoryComponent,
      },

      { path: 'Chefs', component: ChefsComponent },

      { path: 'BookedTables', component: BookingTablesComponent },

      { path: 'Messages', component: MessagesComponent },

      { path: '**', pathMatch: 'full', redirectTo: 'Vision' },
    ],
  },

  { path: '', pathMatch: 'full', redirectTo: 'Dashboard' },

  { path: '**', component: NotFoundComponent },
];
