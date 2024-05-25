import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteCompoundService {

  constructor(private http: HttpClient) { }

  onDelete(itemId: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/api/compounds/deleteCompound/?id=${itemId}`);
  }
}
