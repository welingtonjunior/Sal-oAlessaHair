import { CommonModule } from '@angular/common';
import { Component , ElementRef, input, Input, Renderer2} from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
 
  /**
   * O título do serviço. Este texto será exibido no cabeçalho do cartão.
   * @type {string}
   */
  @Input() title: string = '';

  /**
   * A descrição do serviço. Este texto será exibido no corpo do cartão.
   * @type {string}
   */
  @Input() body: string = '';

  /**
   * URL da imagem do serviço. Esta imagem será exibida no topo do cartão.
   * @type {string}
   */
  @Input() srcImage: string = '';

  /**
   * URL para mais informações sobre o serviço. Este link será usado no botão "Learn More".
   * @type {string}
   */
  @Input() link: string = '';


  get backgroundImage() {
    return this.srcImage ? `url('${this.srcImage}')` : 'none';
  }
  get isVideo(): boolean {
    return this.backgroundImage.endsWith('.mp4'); 
  }

}
