import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  navItems = [
    { label: 'Home', route: '/' },
    { label: 'Sobre', route: 'sobre' },
    { label: 'Serviços', route: 'servicos' },
    { label: 'Contato', route: 'contato' }
  ];
}
