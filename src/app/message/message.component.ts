import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [JsonPipe, CommonModule, CarouselModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent implements OnInit {
  messages: any = []

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoHeight: false,
    navSpeed: 700,
    navText: ['', ''],
    // responsive: {
    //   0: {
    //     items: 1
    //   },
    //   400: {
    //     items: 2
    //   },
    //   740: {
    //     items: 3
    //   },
    //   940: {
    //     items: 4
    //   }
    // },
    nav: true
  }
  constructor(private communicationService: CommunicationService) {

  }

  ngOnInit(): void {
    this.communicationService.sharedMessageData$.subscribe((resp: any) => {
      console.log(resp)
      this.messages.push(resp)
    })
  }
  pinMessage(index: any) {
    this.communicationService.sendPinData(this.messages[index])
  }


}
