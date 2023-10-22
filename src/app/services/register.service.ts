import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private apiUrl = 'http://103.82.21.87:7000/api/v1/VpBank/create-vp-bank-customer'
  constructor(private http: HttpClient) {}

  regiser(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
