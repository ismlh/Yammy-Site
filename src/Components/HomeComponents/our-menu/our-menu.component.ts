import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { IMealCategory } from '../../../Models/imeal-category';
import { MealCategoryService } from '../../../Services/meal-category.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IMeal } from '../../../Models/imeal';
import { MealsService } from '../../../Services/meals.service';
@Component({
  selector: 'app-our-menu',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './our-menu.component.html',
  styleUrl: './our-menu.component.css'
})
export class OurMenuComponent implements OnInit   {

  mealsCategories:IMealCategory[]=[] as IMealCategory[];

  Imeals:IMeal[]=[] as IMeal[];

  filterdMeals:IMeal[]=[] as IMeal[];

  Category:string="All";

  constructor(private MealCatService:MealCategoryService,private mealsService:MealsService){}

  ngOnInit(): void {
    this.getMealsCategories();
    this.mealsService.getAllMeals().subscribe((res)=>{
      this.filterdMeals=res;
    })
    this.getMeals();
  }

  getMealsCategories(){
    this.MealCatService.getAllMealCategories().subscribe({
      next:(res)=>{
        this.mealsCategories=res;
      },
      error:()=>{
        Swal.fire('Please Run Json Server')
      }
    })
  }

navigation(category:string,anchor:HTMLAnchorElement,anchorsParent:HTMLDivElement){
  this.Category=category;
  this.getMeals()
  if(category==='All')
  {
    this.filterdMeals=this.Imeals
  }
  else{
    this.filterdMeals=this.Imeals.filter(x=>x.category===category);
  }
  for (let index = 0; index < anchorsParent.children.length; index++) {
    anchorsParent.children[index].classList.remove('active');
  }
  anchor.classList.add('active');
}

  getMeals(){
    this.mealsService.getAllMeals().subscribe({
      next:(res)=>{
        this.Imeals=res;
      },
      error:()=>{
        Swal.fire("please run json server");
      }
    })
  }
}
