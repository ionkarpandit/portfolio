import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-project-modal',
  imports: [],
  templateUrl: './project-modal.html',
  styleUrl: './project-modal.css',
})
export class ProjectModal {
  @Input({ required: true }) company: any = null;
  @Input({ required: true }) isOpen = false;
  @Output() closed = new EventEmitter<void>();

  close() {
    this.isOpen = false;
    this.closed.emit();
  }
}
