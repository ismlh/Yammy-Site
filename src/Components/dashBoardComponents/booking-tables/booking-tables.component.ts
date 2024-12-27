import { Component, OnInit } from '@angular/core';
import { IReservation } from '../../../Models/ireservation';
import { ReserIReservationvationServiceService } from '../../../Services/reser-ireservationvation-service.service';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking-tables',
  standalone: true,
  imports: [SweetAlert2Module, CommonModule, FormsModule],
  templateUrl: './booking-tables.component.html',
  styleUrl: './booking-tables.component.css',
})
export class BookingTablesComponent implements OnInit {
  Reservations: IReservation[] = [] as IReservation[];

  Reservation: IReservation = {} as IReservation;

  constructor(private _reservService: ReserIReservationvationServiceService) {}

  ngOnInit(): void {
    this.getAllReservations();
  }

  getAllReservations() {
    this._reservService.getAll().subscribe({
      next: (res) => {
        this.Reservations = res;
      },
      error: () => {
        Swal.fire('please Run Json-Server');
      },
    });
  }

  updateReservation() {
    this._reservService
      .updateReservation(this.Reservation.id, this.Reservation)
      .subscribe((res) => {
        this.Reservation = {} as IReservation;
        this.getAllReservations();
        Swal.fire('Updated Success');
      });
  }
  updateReservationData(id: string) {
    this._reservService.getReservationById(id).subscribe((res) => {
      this.Reservation = res;
    });
  }
  deletereservation(id: string) {
    this._reservService.deleteReservation(id).subscribe({
      next: (res) => {
        Swal.fire(`Reservation Of ${res.Name} Deleted`);
        this.getAllReservations();
      },
    });
  }
}
