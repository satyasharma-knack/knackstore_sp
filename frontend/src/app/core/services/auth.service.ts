import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { AuthResponse, LoginRequest, RegisterRequest } from '../../models';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = environment.apiUrl;
  private currentUserSubject = new BehaviorSubject<AuthResponse | null>(this.loadUser());
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {}

  get currentUser(): AuthResponse | null { return this.currentUserSubject.value; }
  get isLoggedIn(): boolean { return !!this.currentUser; }

  login(request: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/login`, request).pipe(
      tap(res => this.saveUser(res))
    );
  }

  register(request: RegisterRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/register`, request).pipe(
      tap(res => this.saveUser(res))
    );
  }

  logout(): void {
    localStorage.removeItem('auth_user');
    this.currentUserSubject.next(null);
  }

  getToken(): string | null { return this.currentUser?.token ?? null; }

  private saveUser(user: AuthResponse): void {
    localStorage.setItem('auth_user', JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  private loadUser(): AuthResponse | null {
    const stored = localStorage.getItem('auth_user');
    return stored ? JSON.parse(stored) : null;
  }
}
