import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-topic-box',
  templateUrl: './topic-box.component.html',
  styleUrl: './topic-box.component.css'
})
export class TopicBoxComponent {
  @Input('pname') productname:string="";
}
