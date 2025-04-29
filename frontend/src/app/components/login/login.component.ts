import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule], // ⬅️ Aqui importa o FormsModule
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  nome: string = '';
  senha: string = '';

  onSubmit() {
    console.log('Login:', this.nome, this.senha);
    // Aqui você chama o service
  }
}
