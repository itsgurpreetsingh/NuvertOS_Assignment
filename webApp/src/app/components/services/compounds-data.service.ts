import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CompoundsDataService {

  constructor(private http:HttpClient) {}
  compounds(){
    return this.http.get('http://localhost:8080/api/compounds/getCompound')
  }
}
