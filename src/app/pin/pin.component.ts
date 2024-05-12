import { Component } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-pin',
  standalone: true,
  imports: [],
  templateUrl: './pin.component.html',
  styleUrl: './pin.component.scss'
})
export class PinComponent {
 constructor( private communicationService:CommunicationService) {
    this.communicationService.sharedData$.subscribe(data => {
  console.log(data)
})
}
}
