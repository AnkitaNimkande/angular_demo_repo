import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  public parentData:any = "This is parent Data";
  public abc:any;

  fetchfrmchild(evt:any){
    console.log(evt);

    this.abc = evt

  }

}
