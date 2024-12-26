import { Component, OnInit } from '@angular/core';
import { IChef } from '../../../Models/ichef';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChefsServiceService } from '../../../Services/chefs-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-edit-chef',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-edit-chef.component.html',
  styleUrl: './add-edit-chef.component.css'
})
export class AddEditChefComponent implements OnInit {

  imgSelected:boolean=false;
  chefObj:IChef={} as IChef;

  Chefs:IChef[]=[] as IChef[];


  addEditAction:boolean=true;

  constructor(private chefService:ChefsServiceService,private _router:Router,private activateRoute:ActivatedRoute){
    this.chefObj.facebookUrl="";
    this.chefObj.instgramUrl="";
  }

  ngOnInit(): void {

    this.activateRoute.params.subscribe((params)=>{
      this.chefService.getChefById(params['id']).subscribe((res)=>{
        this.imgSelected=true;
        this.addEditAction=false;
        this.chefObj=res;
      })

    })
    this.getAllChefs();
  }

  getAllChefs(){
    this.chefService.getAllChefs().subscribe((res)=>{
      this.Chefs=res;
    })
  }

  AddChef(){
    if(this.addEditAction){
    this.chefObj.id=(this.Chefs.length+1).toString();

      this.chefService.addChef(this.chefObj).subscribe({
        next:(res)=>{
          Swal.fire(`Chef Wit Name : ${res.Name} Added`)
          this._router.navigateByUrl('/Dashboard/Chefs')
        }
      })
    }
    else{

        this.imgSelected=false;
        this.addEditAction=true;
        this.chefService.updateChef(this.chefObj.id,this.chefObj).subscribe((res)=>{
          Swal.fire(`${res.Name} data Updated`)
          this._router.navigateByUrl('/Dashboard/Chefs')
        })
    }
  }

  onFileSelected(event: Event): void {
    this.imgSelected = true;
    const file = (event.target as HTMLInputElement)?.files?.[0]; // Get the selected file

    if (file) {
      const reader = new FileReader();

      // Convert the image file to Base64
      reader.onload = () => {
        this.chefObj.ImageUrl = reader.result as string; // Store Base64 string for saving
      };
      reader.readAsDataURL(file);
    }
  }
}
