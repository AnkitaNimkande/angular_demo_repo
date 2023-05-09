import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  // public myForm:any;
  // public submitted:boolean= false;

  // public course:any =['Bsc','Msc','Mca'];

  // constructor(private fb:FormBuilder){
  //   this.myForm = this.fb.group({
  //     name : ['',[Validators.required]],
  //     course : ['']
  //   })
  // }

  // onSubmit(){
  //   this.submitted = true;
  //   console.log(this.myForm.value)
  // }




  // public myForm:any;

  // public submitted:boolean=false;

  // constructor(private fb:FormBuilder){
  //   this.myForm = this.fb.group({
  //     uname:['',[Validators.required]],
  //     pass:['',[Validators.required]]
  //   })
  // }

  // onSubmit(){
  //   this.submitted = true;
  //   console.log(this.myForm.value)

  // }




  
  allFormData: any[] = [];

  myForm: FormGroup;

  public ShowTable: boolean = false;

  public count: number = 0;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      id: [''],
      fname: [''],
      email: [''],
      gender: [''],
    })



  }

  onSubmitData(sub: any) {
    sub.value.id = this.count;

    this.allFormData.push(this.myForm.value)
    this.count++;
    if (this.allFormData.length > 0) {

      this.ShowTable = true;
    }

    console.log(sub.value)

  }


  DeleteRow(del: any) {

    this.allFormData.forEach((elem: any) => {

      if (elem.id == del.id) {
        this.allFormData.splice(this.allFormData.indexOf(elem), 1)

        console.log(del)
      }
    })
  }



  SideUpdate(upd: any) {
    this.myForm.setValue(upd);
    console.log(upd);

  }

  UpdateData(upt: any) {

    this.allFormData.splice(this.allFormData.indexOf(upt.value.id), 1, upt.value)

console.log( upt.value)


  }

}
