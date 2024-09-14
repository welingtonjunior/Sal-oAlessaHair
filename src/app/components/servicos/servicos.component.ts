import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.scss'
})
export class ServicosComponent{
  services = [
    {
      image: 'assets/mechas.jpg',
      title: 'Mechas',
      description: 'Realce seu visual com mechas personalizadas e modernas.',
      link: 'https://wa.me/5532988723306?text=Olá%20AlessaHair,%20gostaria%20de%20mais%20informações%20sobre%20as%20Mechas'
    },
    {
      image: 'assets/cortes.jpg',
      title: 'Cortes',
      description: 'Cortes modernos e estilosos para qualquer ocasião.',
      link: 'https://wa.me/5532988723306?text=Olá%20AlessaHair,%20gostaria%20de%20mais%20informações%20sobre%20os%20Cortes'
    },
    {
      image: 'assets/tratamento-capilar.jpg',
      title: 'Tratamento Capilar',
      description: 'Tratamentos profundos para manter seu cabelo saudável.',
      link: 'https://wa.me/5532988723306?text=Olá%20AlessaHair,%20gostaria%20de%20mais%20informações%20sobre%20o%20Tratamento%20Capilar'
    },
    {
      image: 'assets/alinhamento-capilar.jpg',
      title: 'Alinhamento Capilar',
      description: 'Alinhamento capilar para um acabamento liso e perfeito.',
      link: 'https://wa.me/5532988723306?text=Olá%20AlessaHair,%20gostaria%20de%20mais%20informações%20sobre%20o%20Tratamento%20de%20Alinhamento%20Capilar'
    },
    {
      image: 'assets/botox-capilar.jpg',
      title: 'Botox Capilar',
      description: 'Tratamento de botox capilar para revitalizar e dar brilho ao cabelo.',
      link: 'https://wa.me/5532988723306?text=Olá%20AlessaHair,%20gostaria%20de%20mais%20informações%20sobre%20o%20Botox%20Capilar'
    },
    {
      image: 'assets/selagem.jpg',
      title: 'Selagem',
      description: 'Selagem para cabelos mais saudáveis e com menos frizz.',
      link: 'https://wa.me/5532988723306?text=Olá%20AlessaHair,%20gostaria%20de%20mais%20informações%20sobre%20a%20Selagem'
    }
  ];
}
