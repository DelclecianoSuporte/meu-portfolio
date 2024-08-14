import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {

  contatoFormulario: FormGroup;
  isLoading = false;

  constructor(private fb: FormBuilder, private http: HttpClient, private snackBar: MatSnackBar) {
    this.contatoFormulario = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensagem: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.contatoFormulario.valid) {
      this.isLoading = true; 

      this.http.post('http://localhost:3000/enviar-email', this.contatoFormulario.value).subscribe(
        {
          next: (response) => {
            this.snackBar.open('E-mail enviado com sucesso!', 'Fechar', {
              duration: 2000,
              verticalPosition: 'top',
              horizontalPosition: 'center',
              panelClass: 'custom-snackbar-sucesso' // Use a classe correta sem espaços
            });
            this.contatoFormulario.reset();
          },
          error: (error) => {
            this.snackBar.open('Falha ao enviar e-mail.', 'Fechar', {
              duration: 2000,
              verticalPosition: 'top',
              horizontalPosition: 'center',
              panelClass: 'custom-snackbar-falha' // Use a classe correta sem espaços
            });
            this.contatoFormulario.reset();
          },
          complete: () => {
            this.isLoading = false; // Ocultar o carregamento após a resposta
          }
        }
      )
    }
    else {
      this.snackBar.open('Para entrar em contato, é necessario informar o Nome, E-mail e Mensagem.', 'Fechar', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      });
    }
  }
}