import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {

  public data:any = "Hello Angular";
  public data1:any = "HELLO";

  public date:any = Date();

  public data2:any={
    name: 'ankita',
    roll: '22'
  }

  public amount:number = 1000;

}
