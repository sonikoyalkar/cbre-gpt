import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftPanalComponent } from './left-panal/left-panal.component';
import { MessageComponent } from './message/message.component';
import { PinComponent } from './pin/pin.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LeftPanalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cbre-gpt';
}
