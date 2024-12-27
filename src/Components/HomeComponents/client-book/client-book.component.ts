import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IReservation } from '../../../Models/ireservation';
import { ReserIReservationvationServiceService } from '../../../Services/reser-ireservationvation-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-client-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './client-book.component.html',
  styleUrl: './client-book.component.css',
})
export class ClientBookComponent implements OnInit {
  Reservation: IReservation = {} as IReservation;
  Reservations: IReservation[] = [] as IReservation[];
  constructor(
    private reservationService: ReserIReservationvationServiceService
  ) {}
  ngOnInit(): void {
    this.getReservations();
  }

  getReservations() {
    this.reservationService.getAll().subscribe((res) => {
      this.Reservations = res;
    });
  }
  AddReservation() {
    this.Reservation.id = (
      Number(this.Reservations[this.Reservations.length - 1].id) + 1
    ).toString();
    this.reservationService.addReservation(this.Reservation).subscribe(() => {
      Swal.fire('تم الحجز بنجاح');
      this.Reservation = {} as IReservation;
    });
  }
}
