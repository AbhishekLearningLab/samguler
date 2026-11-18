import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  template: `
    <article class="stat-card" [attr.data-accent]="accent">
      <div class="stat-header">
        <span class="label">{{ label }}</span>
        <span class="trend" [class.negative]="trend === 'down'">
          {{ trend === 'up' ? '▲' : '▼' }} {{ change }}
        </span>
      </div>
      <div class="value">{{ value }}</div>
    </article>
  `,
  styleUrl: './stat-card.scss',
})
export class StatCard {
  @Input() label = '';
  @Input() value = '';
  @Input() change = '';
  @Input() trend: 'up' | 'down' = 'up';
  @Input() accent: 'teal' | 'blue' | 'amber' | 'red' = 'blue';
}
