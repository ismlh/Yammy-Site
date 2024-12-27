import { Component, OnInit } from '@angular/core';
import { Icontact } from '../../../Models/icontact';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessagesService } from '../../../Services/messages.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
})
export class ContactUsComponent implements OnInit {
  contact: Icontact = {} as Icontact;
  Messages: Icontact[] = [] as Icontact[];
  constructor(private msgService: MessagesService) {}
  ngOnInit(): void {
    this.getMessages();
  }
  getMessages() {
    this.msgService.getAllMessages().subscribe((res) => {
      this.Messages = res;
    });
  }
  Addmessage() {
    this.contact.id = (
      Number(this.Messages[this.Messages.length - 1].id) + 1
    ).toString();

    this.msgService.addMessage(this.contact).subscribe(() => {
      Swal.fire('تم ارسال الرساله بنجاح سنقوم بالرد عليكم في اقرب وقت');
      this.contact = {} as Icontact;
    });
  }
}
