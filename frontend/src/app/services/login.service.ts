import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:3001/api/login'; // Use sua porta

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    return this.http.post<{
      success: boolean;
      user?: any;
      token?: string;
      message?: string;
    }>(this.apiUrl, { username, password });
  }
}