import { Component } from '@angular/core';

@Component({
  selector: 'app-info-item',
  templateUrl: './info-item.component.html',
  styleUrl: './info-item.component.css'
})
export class InfoItemComponent {
  message:string = 'This is an info item';
}
