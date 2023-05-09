import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  public allData: any;
  public formData:any
  public singleValue: any;

  constructor(private api:DataService){
    this.submit();
    this.updateApiData();

  }

  submit(){
    this.formData ={
      name:"ankita",
      roll:"22"
    }
    this.postApiData()
  }


  getApiData(){
    this.api.getData().subscribe((res:any)=>{
      console.log(res.data)
      this.allData = res.data
    }
    ) 
  }

  postApiData(){

    this.api.postData(this.formData).subscribe((res:any)=>{
      console.log(res);
      this.singleValue = res;
      // console.log(this.singleValue);
      // this.getApiData()
    })

  }

  onDel(id:any){
    this.api.delData(id).subscribe((res)=>{
      console.log(res);
    })
  }

  updateApiData(){
  this.formData.name = "Shantanu";

    this.api.updateData(this.formData).subscribe((res:any)=>{
      console.log(res);
      
    })
  }

}
