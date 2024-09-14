import { Component } from '@angular/core';
import { ServicosComponent } from '../servicos/servicos.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ServicosComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public href: string = 'https://wa.me/5532988723306?text=Olá%20AlessaHair,%20gostaria%20de%20agendar' 
}
