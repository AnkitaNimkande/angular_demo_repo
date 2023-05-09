import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  public flag:boolean = true;
  public show:any ="This is the text to show";
  public age:number =20;
  public subject:any =['eng', 'hindi', 'marathi', 'history'];
  public state:any = "Mh";

  public myClass:any;
  public myClass1:any = 'test2';
  public myClass2:any = 'test3';
  public myStyle:any;
   public myStyle1:any= {'color':'orange'}
   public myStyle2:any= {'color':'green'}

  constructor(){
    if(this.age>18){
      this.myClass = 'test2';
      this.myStyle = {'color':'blue'}
    }else{
      this.myClass = 'test3';
      this.myStyle = {'color':'yellow'}
    }
  }
}
