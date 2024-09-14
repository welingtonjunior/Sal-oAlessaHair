import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
    @Input() title: string = '';
    @Input() body: string = '';
    @Input() autoCloseTime: number = 0; 
    @Output() close: EventEmitter<void> = new EventEmitter<void>();
  
  showModal: boolean = true;
  private autoCloseSubscription?: Subscription;

  ngOnInit() {
    if (this.autoCloseTime > 0) {
      this.autoCloseSubscription = timer(this.autoCloseTime).subscribe(() => this.closeModal());
    }
  }

  ngOnDestroy() {
    if (this.autoCloseSubscription) {
      this.autoCloseSubscription.unsubscribe();
    }
  }

  closeModal() {
    this.showModal = false;
    this.close.emit()
  }
}
