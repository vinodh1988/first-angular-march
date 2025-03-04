import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-topic-box',
  templateUrl: './topic-box.component.html',
  styleUrl: './topic-box.component.css'
})
export class TopicBoxComponent {
  @Input('pname') productname:string="";
  @Output('send') selectedProduct: EventEmitter<string> = new EventEmitter<string>();


  emitData(product: string) {
    this.selectedProduct.emit(product);
  }

}
