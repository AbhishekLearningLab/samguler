import { Component, Input } from '@angular/core';
import { ShipmentStatus } from '../../../core/models/shipment.model';

@Component({
  selector: 'app-status-badge',
  standalone: true,
  template: `
    <span class="status-badge" [attr.data-status]="status">
      {{ label }}
    </span>
  `,
  styleUrl: './status-badge.scss',
})
export class StatusBadge {
  @Input() status: ShipmentStatus = 'in_transit';

  get label(): string {
    switch (this.status) {
      case 'delivered':
        return 'Delivered';
      case 'delayed':
        return 'Delayed';
      case 'pending':
        return 'Pending';
      default:
        return 'In transit';
    }
  }
}
