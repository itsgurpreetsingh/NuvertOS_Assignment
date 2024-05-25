import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private http: HttpClient) { }

  onUpdate(formData: any): Observable<any> {
    return this.http.put(`http://localhost:8080/api/compounds/updateCompound?id=${formData.id}`, formData);
  }
}
