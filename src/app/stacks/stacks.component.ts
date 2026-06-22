import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stacks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stacks.component.html',
  styleUrl: './stacks.component.css'
})
export class StacksComponent {

  tecnologias: { nome: string; icone?: string }[] = [
    { nome: 'HTML', icone: 'devicon-html5-plain colored' },
    { nome: 'CSS', icone: 'devicon-css3-plain colored' },
    { nome: 'Javascript', icone: 'devicon-javascript-plain colored' },
    { nome: 'TypeScript', icone: 'devicon-typescript-plain colored' },
    { nome: 'Angular', icone: 'devicon-angularjs-plain colored' },
    { nome: 'React', icone: 'devicon-react-original colored' },
    { nome: 'C#', icone: 'devicon-csharp-plain colored' },
    { nome: '.Net', icone: 'devicon-dot-net-plain colored' },
    { nome: 'Java', icone: 'devicon-java-plain colored' },
    { nome: 'Spring Boot', icone: 'devicon-spring-plain colored' },
    { nome: 'Jquery', icone: 'devicon-jquery-plain colored' },
    { nome: 'Bootstrap', icone: 'devicon-bootstrap-plain colored' },
    { nome: 'Rest', icone: 'ti ti-api' },
    { nome: 'Node', icone: 'devicon-nodejs-plain colored' },
    { nome: 'Soap', icone: 'ti ti-exchange' },
    { nome: 'Fluig', icone: 'ti ti-building' },
    { nome: 'SQL Server', icone: 'devicon-microsoftsqlserver-plain colored' },
    { nome: 'Mysql', icone: 'devicon-mysql-plain colored' },
    { nome: 'Postgres', icone: 'devicon-postgresql-plain colored' },
    { nome: 'Git', icone: 'devicon-git-plain colored' },
    { nome: 'PHP', icone: 'devicon-php-plain colored' },
    { nome: 'Python', icone: 'devicon-python-plain colored' },
    { nome: 'Tailwind', icone: 'devicon-tailwindcss-plain colored' },
    { nome: 'Entity', icone: 'ti ti-database' },
    { nome: 'Docker', icone: 'devicon-docker-plain colored' },
    { nome: 'AWS', icone: 'devicon-amazonwebservices-plain-wordmark colored' },
    { nome: 'Protheus ERP' },
    { nome: 'Consinco ERP' }
  ];
}