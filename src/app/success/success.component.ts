import { CommonModule } from '@angular/common';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: 'success.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class SuccessComponent implements OnInit {
  @Output() emitBtn = new EventEmitter<void>();
  @Input() email = '';

  subscribe() {
    this.emitBtn.emit();
  }
  constructor() {}

  ngOnInit() {}
}
