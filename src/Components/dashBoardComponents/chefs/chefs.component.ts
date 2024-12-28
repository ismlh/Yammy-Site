import { Component, OnInit } from '@angular/core';
import { IChef } from '../../../Models/ichef';
import { ChefsServiceService } from '../../../Services/chefs-service.service';
import { RouterLink } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-chefs',
  standalone: true,
  imports: [RouterLink, SweetAlert2Module],
  templateUrl: './chefs.component.html',
  styleUrl: './chefs.component.css',
})
export class ChefsComponent implements OnInit {
  Chefs: IChef[] = [] as IChef[];
  constructor(private chefsServ: ChefsServiceService) {}

  ngOnInit(): void {
    this.getChefs();
  }

  getChefs() {
    this.chefsServ.getAllChefs().subscribe({
      next: (res) => {
        this.Chefs = res;
      },
      error: () => {
        Swal.fire('Please run json server');
      },
    });
  }

  deleteChef(id: string) {
    this.chefsServ.deleteChef(id).subscribe({
      next: (res) => {
        this.getChefs();
        Swal.fire(`Chef With Name : ${res.Name} deleted`);
      },
      error: () => {
        Swal.fire('please run json Server');
      },
    });
  }
}
