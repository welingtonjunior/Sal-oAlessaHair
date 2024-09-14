import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ModalComponent } from "../../shared/modal/modal.component";

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [FormsModule, ModalComponent, CommonModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
})
export class ContatoComponent {
  @ViewChild('form', {static: true}) form!: NgForm

  public showModal: boolean = false;
  public modalTitle: string = '';
  public modalBody: string = '';

  public submit(form: NgForm) {
    if (form.valid) {
      this.modalTitle = 'Mensagem Enviada!';
      this.modalBody = 'Sua mensagem foi enviada com sucesso. Obrigado pelo contato!';
      this.form.reset()
    } else {
      this.modalTitle = 'Erro!';
      this.modalBody = 'Por favor, preencha todos os campos obrigatórios corretamente.';
    }
    this.showModal = true;
  }

  public closeModal() {
    this.showModal = false;
  }


}
