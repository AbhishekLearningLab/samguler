import { Component, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ShipmentService } from '../../core/services/shipment.service';
import { StatusBadge } from '../../shared/components/status-badge/status-badge';

@Component({
  selector: 'app-tracking',
  standalone: true,
  imports: [RouterLink, StatusBadge],
  templateUrl: './tracking.html',
  styleUrl: './tracking.scss',
})
export class TrackingPage {
  readonly shipmentService = new ShipmentService();
  readonly shipment = signal(this.shipmentService.getShipments()[0]);

  constructor(private readonly route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      const shipmentId = params.get('id') ?? this.shipmentService.getShipments()[0].id;
      const shipment = this.shipmentService.getShipmentById(shipmentId);
      this.shipment.set(shipment ?? this.shipmentService.getShipments()[0]);
    });
  }
}
