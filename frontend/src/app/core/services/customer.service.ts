import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../../models';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CustomerService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getProfile(): Observable<Customer> {
    return this.http.get<Customer>(`${this.apiUrl}/customers/me`);
  }

  updateProfile(profile: Partial<Customer>): Observable<Customer> {
    return this.http.put<Customer>(`${this.apiUrl}/customers/me`, profile);
  }
}
