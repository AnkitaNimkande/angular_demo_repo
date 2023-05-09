import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent {
  public Data:any

  constructor(private act:ActivatedRoute){
    //params
    console.log(this.act.snapshot.params['id']);

    //paramMap
    console.log(this.act.paramMap.subscribe((res:any)=>{
      console.log(res);
      this.Data = res;
      console.log(this.Data.params.name)
    }))
  }

}
