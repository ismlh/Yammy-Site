import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Icontact } from '../../../Models/icontact';
import { MessagesService } from '../../../Services/messages.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
})
export class MessagesComponent implements OnInit {
  Messages: Icontact[] = [] as Icontact[];

  contact: Icontact = {} as Icontact;

  constructor(private messagesService: MessagesService) {}
  ngOnInit(): void {
    this.getMessages();
  }
  getMessages() {
    this.messagesService.getAllMessages().subscribe({
      next: (res) => {
        this.Messages = res;
      },
      error: () => {
        Swal.fire('please Run Json-Server');
      },
    });
  }

  updatemessage() {
    this.messagesService
      .editMessage(this.contact.id, this.contact)
      .subscribe((res) => {
        this.contact = {} as Icontact;
        this.getMessages();
        Swal.fire('Updated Success');
      });
  }

  updateMessage(id: string) {
    this.messagesService.getMessageByID(id).subscribe((res) => {
      this.contact = res;
    });
  }

  deleteMessgae(id: string) {
    this.messagesService.deleteMessage(id).subscribe({
      next: (res) => {
        Swal.fire(`Message Of ${res.Name} Deleted`);
        this.getMessages();
      },
    });
  }
}
