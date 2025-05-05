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
  username = 'admin';
  password = '';
  isLoading = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  onSubmit(form: NgForm) {
    if (!form.valid) return;

    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.loginService.login(this.username, this.password).subscribe({
      next: (response) => {
        this.isLoading = false;
        
        if (response.success) {
          this.successMessage = 'Login realizado com sucesso!';
          // Redireciona após 1 segundo
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 1000);
        } else {
          this.errorMessage = response.message || 'Credenciais inválidas';
        }
      },
      error: (err) => {
        this.isLoading = false;
        if (err.status === 0) {
          this.errorMessage = 'Não foi possível conectar ao servidor';
        } else {
          this.errorMessage = 'Erro durante o login';
        }
        console.error('Erro no login:', err);
      }
    });
    // No seu login.component.ts
this.loginService.login(this.username, this.password).subscribe({
  next: (res) => {
    if (res.success) {
      localStorage.setItem('usuarioFord', JSON.stringify(res.user));
      this.router.navigate(['/home']);
    }
  }
});
  }
}