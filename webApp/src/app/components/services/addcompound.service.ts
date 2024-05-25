import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddcompoundService {

  constructor(private http: HttpClient) { }

  onAddition(formData: any): Observable<any> {
    return this.http.post(`http://localhost:8080/api/compounds/addCompound`, formData);
  }
}
