import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { 
    
    
    }


    getData(){
      return this.http.get("https://reqres.in/api/users")
  }

  postData(data:any){
    return this.http.post("https://reqres.in/api/users", data)

  }

  delData(id:any){
    return this.http.delete("https://reqres.in/api/users/"+id)

  }

  updateData(data:any){
    return this.http.put("https://reqres.in/api/users/" + data.id, data)
  }
}

