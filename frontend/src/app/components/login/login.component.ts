import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario = 'admin';  // Valor inicial para facilitar testes
  senha = '123456';   // Valor inicial para facilitar testes
  carregando = false;
  erro = '';

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  enviarFormulario(form: NgForm) {
    if (!form.valid) return;

    this.carregando = true;
    this.erro = '';

    this.loginService.fazerLogin(this.usuario, this.senha).subscribe({
      next: (resposta: any) => {
        this.carregando = false;
        if (resposta.success) {
          this.loginService.salvarLogin(resposta);
          this.router.navigate(['/home']);
        } else {
          this.erro = 'Usuário ou senha incorretos';
        }
      },
      error: () => {
        this.carregando = false;
        this.erro = 'Erro ao conectar com o servidor';
      }
    });
  }
}