import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  public data:any;
  public Link:any = "https://www.google.co.in";
  public data1:any;
  public Link1: any= "https://images.squarespace-cdn.com/content/v1/51990477e4b0f50f41c3d666/1500751975032-MLSUP812M3A0YWB2ILRQ/ke17ZwdGBToddI8pDm48kKAwwdAfKsTlKsCcElEApLR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UegTYNQkRo-Jk4EWsyBNhwKrKLo5CceA1-Tdpfgyxoog5ck0MD3_q0rY3jFJjjoLbQ/image-asset.jpeg"

  constructor(){
    this.data ="This is string interpolation";
  }

  onClick(){
    alert("This is event binding")
  }
}
