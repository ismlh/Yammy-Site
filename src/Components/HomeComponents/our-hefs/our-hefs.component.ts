import { Component, OnInit } from '@angular/core';
import { IChef } from '../../../Models/ichef';
import { ChefsServiceService } from '../../../Services/chefs-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-our-hefs',
  standalone: true,
  imports: [],
  templateUrl: './our-hefs.component.html',
  styleUrl: './our-hefs.component.css',
})
export class OurHefsComponent implements OnInit {
  ourChefs: IChef[] = [] as IChef[];

  constructor(private ichefService: ChefsServiceService) {}
  ngOnInit(): void {
    this.getChefs();
  }
  getChefs() {
    this.ichefService.getAllChefs().subscribe({
      next: (res) => {
        this.ourChefs = res;
      },
      error: () => {
        Swal.fire('Please Run json Server');
      },
    });
  }
}
