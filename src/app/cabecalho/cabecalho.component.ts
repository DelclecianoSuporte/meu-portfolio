import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})
export class CabecalhoComponent {

  @Input() rodape = false;

  menuAberto = false;

  anoAtual = new Date().getFullYear();

  toggleMenu() {
    this.menuAberto = !this.menuAberto;
  }
}