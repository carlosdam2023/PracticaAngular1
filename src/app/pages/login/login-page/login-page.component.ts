import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  inputPass = '';
  inputUser = '';
  user = 'carlosdam2023';
  pass = 'carlosdam2023';

  constructor(private router: Router){}

  verifyLogin() {
    if (this.inputPass === this.pass && this.inputUser === this.user) {
      Swal.fire({
        icon: "success",
        title: "Login correcto",
        text: "¡Bienvenido!",
      }).then(() => {
        // Redirige después de que el usuario acepte
        this.router.navigate(['/cards']);
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Ups...",
        text: "Login incorrecto",
      });
    }
  }
  
}
