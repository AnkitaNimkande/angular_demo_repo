import { Component } from '@angular/core';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-service-crud',
  templateUrl: './service-crud.component.html',
  styleUrls: ['./service-crud.component.css']
})
export class ServiceCrudComponent {

  public allFormdata:any
  public idd:any;
  public na:any;
  public gen:any

  constructor(private api:CrudService){

  }

  onSubmit(data:any){
      this.api.postData(data.value).subscribe((res:any)=>{
        console.log(res);
      })
      this.getApiData()
  }

  getApiData(){
    this.api.getData().subscribe((res:any)=>{
      console.log(res);
      this.allFormdata = res
      console.log(this.allFormdata)

    })
  }

  onDel(data:any){
    this.api.deleteData(data.id).subscribe((res:any)=>{
      console.log(res)
    })
    this.getApiData()
  }

  updateApiData(data:any){
    this.api.updateData(data.value).subscribe((res:any)=>{
      console.log(res)
       this.getApiData()
    })
    // this.getApiData();
  }

  sideUpdate(data:any){
    this.idd = data.id;
    this.na = data.name;
    this.gen = data.gender;

  }



//   public allFormData:any;
//   public courses = ["Engineering","Msc","Bsc","BTech"];
//   public idd:any;
//   public fn:any;
//   public ln:any;
//   public el:any;
//   public cor:any;
//   public gen:any;
//   public ps:any;
//   public cps:any;

//   constructor(private api:CrudService){

//   }

//   onSubmitData(data:any){
//     console.log(data.value);
//     this.api.postData(data.value).subscribe((res:any)=>{
//       console.log(res);
//     })
//       this.getAllData();
  
// }

// getAllData(){
//   this.api.getData().subscribe((res:any)=>{
//     console.log(res);
//     this.allFormData = res;
//     (err:any)=>{console.log(err)}
//     console.log(this.allFormData)
//   })
// }

// onDel(data:any){
//   return this.api.deleteData(data.id).subscribe((res:any)=>{
//     console.log(res);
//     this.getAllData();
//   })
//   }

//   //main update
//   onClickUpdate(data:any){
//     this.api.updateData(data.value).subscribe((res:any)=>
//     {console.log(res)
//       this.getAllData()})

//   }


//   //side update
//   onUpdate(data:any){
//     console.log(data)

//     this.idd = data.id;
//     this.fn = data.fname
//     this.ln = data.lname;
//     this.el = data.eml;
//     this.cor = data.course;
//     this.gen = data.gender;
//     this.ps = data.pass;
//     this.cps = data.cpass;
//   }

  
  }


