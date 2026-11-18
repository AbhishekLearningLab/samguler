import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ShipmentService } from '../../core/services/shipment.service';
import { StatusBadge } from '../../shared/components/status-badge/status-badge';

@Component({
  selector: 'app-shipments',
  standalone: true,
  imports: [RouterLink, StatusBadge],
  templateUrl: './shipments.html',
  styleUrl: './shipments.scss',
})
export class ShipmentsPage {
  readonly searchTerm = signal('');
  readonly shipmentService = new ShipmentService();

  readonly filteredShipments = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();
    const shipments = this.shipmentService.getShipments();

    if (!term) {
      return shipments;
    }

    return shipments.filter((shipment) =>
      [shipment.id, shipment.customer, shipment.destination, shipment.origin]
        .join(' ')
        .toLowerCase()
        .includes(term),
    );
  });

  updateSearch(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchTerm.set(target.value);
  }
}
