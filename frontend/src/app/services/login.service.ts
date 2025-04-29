import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:3001/login';

  constructor(private http: HttpClient) {}

  login(nome: string, senha: string): Observable<any> {
    return this.http.post(this.apiUrl, { nome, senha });
  }
}
