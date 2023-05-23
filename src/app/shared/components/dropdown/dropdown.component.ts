import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  constructor(){}
  @Input() title:string = ''
  @Input() data:any [] = []
  @Output() filtering = new EventEmitter();

  filterData(event:any){
    this.filtering.emit(event)
  }
}
