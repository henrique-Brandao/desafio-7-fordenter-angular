import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:3000/api/login';

  constructor(private http: HttpClient, private router: Router) {}

  // Método para fazer login
  fazerLogin(username: string, password: string) {
    return this.http.post(this.apiUrl, { username, password });
  }

  // Método para verificar se está logado
  estaLogado(): boolean {
    return localStorage.getItem('usuarioFord') !== null;
  }

  // Método para salvar o login
  salvarLogin(resposta: any): void {
    localStorage.setItem('usuarioFord', JSON.stringify(resposta));
  }

  // Método para fazer logout
  sair(): void {
    localStorage.removeItem('usuarioFord');
    this.router.navigate(['/login']);
  }
}