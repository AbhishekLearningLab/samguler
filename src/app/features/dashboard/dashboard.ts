import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ShipmentService } from '../../core/services/shipment.service';
import { StatCard } from '../../shared/components/stat-card/stat-card';
import { StatusBadge } from '../../shared/components/status-badge/status-badge';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [StatCard, StatusBadge, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class DashboardPage {
  private readonly shipmentService = inject(ShipmentService);

  readonly stats = this.shipmentService.getSummary();
  readonly shipments = this.shipmentService.getShipments().slice(0, 4);
  readonly alerts = this.shipmentService.getAlerts();
}
