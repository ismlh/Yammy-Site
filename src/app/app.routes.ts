import { Routes } from '@angular/router';
import { NotFoundComponent } from '../Components/HomeComponents/not-found/not-found.component';
import { HomeComponent } from '../Components/HomeComponents/home/home.component';

export const routes: Routes = [
  // first Match Wins

  {
    path: 'Dashboard',

    children: [
      { path: '', pathMatch: 'full', redirectTo: 'Meals' },

      {
        path: 'Meals',
        loadComponent: () =>
          import(
            '../Components/dashBoardComponents/meals/meals.component'
          ).then((obj) => obj.MealsComponent),
      },

      {
        path: 'AddEditComponent/:id',
        loadComponent: () =>
          import(
            '../Components/dashBoardComponents/add-edit-component/add-edit-component.component'
          ).then((obj) => obj.AddEditComponentComponent),
      },

      {
        path: 'MealsCategories',
        loadComponent: () =>
          import(
            '../Components/dashBoardComponents/meals-categories/meals-categories.component'
          ).then((obj) => obj.MealsCategoriesComponent),
      },

      {
        path: 'AddEditMealsCategories/:id',
        loadComponent: () =>
          import(
            '../Components/dashBoardComponents/add-edit-meal-category/add-edit-meal-category.component'
          ).then((obj) => obj.AddEditMealCategoryComponent),
      },

      {
        path: 'Chefs',
        loadComponent: () =>
          import(
            '../Components/dashBoardComponents/chefs/chefs.component'
          ).then((obj) => obj.ChefsComponent),
      },

      {
        path: 'addEditChef/:id',
        loadComponent: () =>
          import(
            '../Components/dashBoardComponents/add-edit-chef/add-edit-chef.component'
          ).then((obj) => obj.AddEditChefComponent),
      },

      {
        path: 'BookedTables',
        loadComponent: () =>
          import(
            '../Components/dashBoardComponents/booking-tables/booking-tables.component'
          ).then((obj) => obj.BookingTablesComponent),
      },

      {
        path: 'Messages',
        loadComponent: () =>
          import(
            '../Components/dashBoardComponents/messages/messages.component'
          ).then((obj) => obj.MessagesComponent),
      },

      { path: '**', pathMatch: 'full', redirectTo: 'Vision' },
    ],
  },

  { path: 'Home', component: HomeComponent },

  { path: '', pathMatch: 'full', redirectTo: 'Dashboard' },
];
