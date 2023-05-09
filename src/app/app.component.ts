import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo2';

  public flag:boolean = true

constructor(private route:Router){

}
  onClick(){
    if(this.flag){
    this.route.navigate(['dir']);
    // this.route.navigateByUrl('dir')
    }

  }
}
