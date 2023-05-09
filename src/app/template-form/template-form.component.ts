import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  public allData:any=[];
  public idd:any;
  public na:any;
  public gen:any
  public count:number = 1

  onSubmit(data:any){
    console.log(data.value)
    if(data.value.id == undefined){
    data.value.id = this.count
    this.allData.push(data.value);
    console.log(this.allData);
    }this.count++;
  }

  ondel(data:any){
    this.allData.forEach((element:any, index:any) => {

      if(element.id == data.id){
        this.allData.splice(index,1);
      } 
    });
  }

  onUpdate(data:any){
    this.idd = data.id;
    this.na = data.name;
    this.gen = data.gender
  }

  mainUpdate(dt:any){
    this.allData.forEach((element:any)=>{
      if(element.id == dt.value.id){
        element.name = dt.value.name,
        element.gender = dt.value.gender
      }
    })
}
}
