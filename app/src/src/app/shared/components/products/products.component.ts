import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  constructor(){}

  @Input() data:any = {}
  @Output() item = new EventEmitter()
  addBtn:boolean = false;
  amount:number = 1

  add(){
    this.item.emit({item:this.data, quantity:this.amount})
  }

}
