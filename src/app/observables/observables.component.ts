import { Component } from '@angular/core';
import { Observable, from, map, merge, of } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent {


  public array:any =[1,2,3,4,5,6,7,8,9];

  public obs1:any;
  public obs2:any;
  public obs3:any;
  public obs4:any;
  public obs5:any;

  constructor(){

    //1. from
    this.obs1 = from(this.array);

    this.obs1.subscribe((res:any)=>{
      console.log(res);
    })

    var a =this.obs1.subscribe((res:any)=>{
      console.log(res);
    })

    //2. of
    this.obs2 = of('hello',4,6,'abc',true,null)

    this.obs2.subscribe((res:any)=>{
      console.log(res);
    })

    // 3. pipe
    // this.obs3.pipe(
    //   map((x:any)=>(x>5)))
    

    // this.obs3.subscribe((res:any)=>{
    //   console.log(res)});

    //Observable.create , next,complete,error
    this.obs4 = Observable.create((observer:any)=>{
      observer.next([1,2,3]);
      observer.next([4,5,6]);
      // observer.error();
      observer.complete();
      observer.next([7,8,9]);
    })
     this.obs4.subscribe((res:any)=>{
      console.log(res);
     });


     this.obs5 = Observable.create((observer:any)=>{
      observer.next([10,11,12])
     })

     this.obs5.subscribe((res:any)=>{console.log(res)})


     //Merge
     const obs6 = merge(this.obs4,this.obs5)
     obs6.subscribe((res:any)=>{
      console.log(res);
     })

  }


  

  // public array:any = [1,2,3,4,5,6];
  // public obs1:any;
  // public obs2:any;
  // public obs3:any
  // public obs4:any;
  // public obs5:any;


  // //1.from

  // constructor(){
  // //1.from
  //   this.obs1 = from (this.array)
  //   this.obs1.subscribe((res:any)=>{console.log(res)})

  //   //1.of
  //   this.obs2 = of (7,8,'abc',true,null);
  //   this.obs2.subscribe((res:any)=>{console.log(res)})

  //   //Observable.create
  //   this.obs3 = Observable.create((observer:any)=>{
  //     observer.next([1,2,3]);
  //     // observer.error();
  //     observer.next([4,5,6]);
  //     // observer.complete();
  //     observer.next([7,8,9])
  //     observer.next([10,11,12]);

  //   })
  //   this.obs3.subscribe((res:any)=>{console.log(res)});

  //   this.obs4 = Observable.create((observer:any)=>{
  //     observer.next([13,14,15])
  //   })

  //   //merge
  //   this.obs5 = merge(this.obs3,this.obs4)
  //   this.obs5.subscribe((res:any)=>{console.log(res)})




  // }


}



