import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() image!: string;
  @Input() title!: string;
  @Input() text!: string;
  @Input() buttonText!: string;
  @Input() link!: string;
}
