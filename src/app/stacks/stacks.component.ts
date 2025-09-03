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

   tecnologias: { nome: string; experiencia: string }[][] = [
    [
      { nome: 'HTML', experiencia: '4 anos de experiência' },
      { nome: 'CSS', experiencia: '4 anos de experiência' },
      { nome: 'Javascript', experiencia: '4 anos de experiência' }
    ],
    [
      { nome: 'TypeScript', experiencia: '1 ano de experiência' },
      { nome: 'Angular', experiencia: '1 ano de experiência' },
      { nome: 'React', experiencia: '1 ano de experiência' }
    ],
    [
      { nome: 'C#', experiencia: '1 ano de experiência' },
      { nome: '.Net', experiencia: '1 ano de experiência' },
      { nome: 'Java', experiencia: '3 anos de experiência' }
    ],
    [
      { nome: 'Jquery', experiencia: '3 anos de experiência' },
      { nome: 'Bootstrap', experiencia: '3 anos de experiência' },
      { nome: 'Rest', experiencia: '3 anos de experiência' }
    ],
    [
      { nome: 'Node', experiencia: '1 ano de experiência' },
      { nome: 'Soap', experiencia: '3 anos de experiência' },
      { nome: 'Fluig', experiencia: '2 anos de experiência' }
    ],
    [
      { nome: 'SQL Server', experiencia: '1 ano de experiência' },
      { nome: 'Mysql', experiencia: '1 ano de experiência' },
      { nome: 'Git', experiencia: '2 anos de experiência' }
    ],
    [
      { nome: 'PHP', experiencia: '1 ano de experiência' },
      { nome: 'Tailwind', experiencia: '3 meses de experiência' },
      { nome: 'Entity', experiencia: '1 ano de experiência' }
    ],
    [
      { nome: 'Protheus ERP', experiencia: '3 meses de experiência' },
      { nome: 'Consinco ERP', experiencia: '2 anos de experiência' },
    ]
  ];
}
