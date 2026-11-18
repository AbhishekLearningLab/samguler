import { Injectable } from '@angular/core';
import { Shipment, ShipmentAlert, ShipmentStat } from '../models/shipment.model';

@Injectable({
  providedIn: 'root',
})
export class ShipmentService {
  private readonly shipments: Shipment[] = [
    {
      id: 'CF-1048',
      customer: 'Northwind Foods',
      origin: 'Mumbai, Maharashtra',
      destination: 'Bengaluru, Karnataka',
      route: 'Mumbai → Bengaluru',
      status: 'in_transit',
      priority: 'High',
      progress: 72,
      eta: 'Today, 6:45 PM',
      vehicle: 'TR-221',
      temperature: '2°C',
      weight: '1,240 kg',
      lastUpdate: '20 minutes ago',
      milestones: [
        { label: 'Picked up', time: '08:15', description: 'Cold-chain pallet loaded in Mumbai' },
        { label: 'Cross-docking', time: '12:30', description: 'Regional hub transfer completed at Nashik' },
        { label: 'In transit', time: '14:10', description: 'Route optimization active on NH-48' },
        { label: 'Estimated arrival', time: '18:45', description: 'Delivery window in progress for Bengaluru' },
      ],
    },
    {
      id: 'CF-2042',
      customer: 'BluePeak Retail',
      origin: 'Ahmedabad, Gujarat',
      destination: 'Jaipur, Rajasthan',
      route: 'Ahmedabad → Jaipur',
      status: 'delayed',
      priority: 'Medium',
      progress: 46,
      eta: 'Tomorrow, 9:20 AM',
      vehicle: 'TR-118',
      temperature: '10°C',
      weight: '3,100 kg',
      lastUpdate: '41 minutes ago',
      milestones: [
        { label: 'Dispatched', time: '05:40', description: 'Pre-cooling completed in Ahmedabad' },
        { label: 'Weather alert', time: '10:10', description: 'High wind warning on the western corridor' },
        { label: 'Route re-plan', time: '11:35', description: 'Alternate route selected via NH-48' },
        { label: 'Arrival update', time: 'Tomorrow 09:20', description: 'ETA revised for morning delivery' },
      ],
    },
    {
      id: 'CF-3209',
      customer: 'Summit Medical',
      origin: 'Chennai, Tamil Nadu',
      destination: 'Hyderabad, Telangana',
      route: 'Chennai → Hyderabad',
      status: 'delivered',
      priority: 'Low',
      progress: 100,
      eta: 'Delivered',
      vehicle: 'TR-303',
      temperature: '6°C',
      weight: '860 kg',
      lastUpdate: '2 hours ago',
      milestones: [
        { label: 'Delivered', time: '07:00', description: 'Shipment signed and accepted in Hyderabad' },
        { label: 'Proof of delivery', time: '07:14', description: 'Customer archive updated successfully' },
      ],
    },
    {
      id: 'CF-4411',
      customer: 'Apex Industrial',
      origin: 'Kolkata, West Bengal',
      destination: 'Patna, Bihar',
      route: 'Kolkata → Patna',
      status: 'pending',
      priority: 'High',
      progress: 18,
      eta: 'Thu, 11:40 AM',
      vehicle: 'TR-405',
      temperature: '-5°C',
      weight: '2,840 kg',
      lastUpdate: '6 minutes ago',
      milestones: [
        { label: 'Awaiting dispatch', time: 'Pending', description: 'Dock assignment in progress at Kolkata' },
        { label: 'Gate check', time: 'Scheduled', description: 'Documentation and security review underway' },
        { label: 'Departure', time: 'Thu 11:40', description: 'Departure window pending confirmation for Patna' },
      ],
    },
  ];

  getShipments(): Shipment[] {
    return [...this.shipments];
  }

  getShipmentById(id: string): Shipment | undefined {
    return this.shipments.find((shipment) => shipment.id === id);
  }

  getSummary(): ShipmentStat[] {
    return [
      { label: 'On-time rate', value: '96.4%', change: '+2.1%', trend: 'up', accent: 'teal' },
      { label: 'Active loads', value: '128', change: '+18', trend: 'up', accent: 'blue' },
      { label: 'Delayed', value: '7', change: '-3', trend: 'down', accent: 'amber' },
      { label: 'Exceptions', value: '4', change: '+1', trend: 'down', accent: 'red' },
    ];
  }

  getAlerts(): ShipmentAlert[] {
    return [
      { title: 'Weather disruption', detail: 'Western highway reroute needed for CF-2042', severity: 'warning' },
      { title: 'Cold chain check', detail: 'Refrigerated trailer temperature drift detected in transit', severity: 'normal' },
      { title: 'Dock congestion', detail: 'Mumbai hub loading window delayed by 27 minutes', severity: 'critical' },
    ];
  }
}
