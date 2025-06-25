import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.css'
})
export class ProjetosComponent {

  projetos = [
    {
      titulo: 'Sistema de Cadastro',
      tecnologias: ['HTML', 'CSS', 'Angular'],
      imagem: 'imagens/CadastroUsuario.jpg',
      link: 'https://github.com/DelclecianoSuporte/Cadastro-de-Usuarios' 
    },
    {
      titulo: 'Api Usuários',
      tecnologias: ['C#', '.NET'],
      imagem: 'imagens/ApiUsuarios.jpg',
      link: 'https://github.com/DelclecianoSuporte/Usuarios'
    },
    {
      titulo: 'Pokedex Pokémons',
      tecnologias: ['HTML', 'CSS', 'Angular'],
      imagem: 'imagens/pokedex.jpg',
      link: 'https://github.com/DelclecianoSuporte/angular-pokedex'
    },
    {
      titulo: 'Prime Flix',
      tecnologias: ['HTML', 'CSS', 'React'],
      imagem: 'imagens/Prime-Flix.jpg',
      link: 'https://github.com/DelclecianoSuporte/App-Filmes'
    },
    {
      titulo: 'Api Denúncia',
      tecnologias: ['C#', '.NET'],
      imagem: 'imagens/ApiDenuncia.jpg',
      link: 'https://github.com/DelclecianoSuporte/ApiDenuncia_v2'
    },
    {
      titulo: 'Canal de Denúncia',
      tecnologias: ['HTML', 'CSS', 'JavaScript'],
      imagem: 'imagens/Canal-Denuncia.jpg',
      link: 'https://github.com/DelclecianoSuporte/Site_Denuncia_v2'
    },
    {
      titulo: 'Calculadora IMC',
      tecnologias: ['HTML','CSS','Angular'],
      imagem: 'imagens/calculadora-imc.jpg',
      link: 'https://github.com/DelclecianoSuporte/Calculador-Imc'
    },
    {
      titulo: 'Portfólio',
      tecnologias: ['HTML', 'CSS', 'Angular'],
      imagem: 'imagens/Portfolio.jpg',
      link: 'https://github.com/DelclecianoSuporte/meu-portfolio'
    },
    {
      titulo: 'Gerenciador Financeiro',
      tecnologias: ['HTML', 'CSS', 'Angular'],
      imagem: 'imagens/Gerenciador.jpg',
      link: 'https://github.com/DelclecianoSuporte/Gerenciador-Financeiro'
    },
    {
      titulo: 'Api Gerenciador',
      tecnologias: ['C#', '.Net'],
      imagem: 'imagens/ApiGerenciador.jpg',
      link: 'https://github.com/DelclecianoSuporte/GerenciadorApi'
    },
  ]

}
