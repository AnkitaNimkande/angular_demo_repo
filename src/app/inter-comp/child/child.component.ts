import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() data:any;

  @Output() DataEvent:any= new EventEmitter<any>;

  public childData:any = "this is data from child to parent"

  datafrmchild(){

    this.DataEvent.emit(this.childData)

  }

}
