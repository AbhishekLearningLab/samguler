export type ShipmentStatus = 'in_transit' | 'delayed' | 'pending' | 'delivered';
export type ShipmentPriority = 'High' | 'Medium' | 'Low';

export interface ShipmentMilestone {
  label: string;
  time: string;
  description: string;
}

export interface Shipment {
  id: string;
  customer: string;
  origin: string;
  destination: string;
  route: string;
  status: ShipmentStatus;
  priority: ShipmentPriority;
  progress: number;
  eta: string;
  vehicle: string;
  temperature: string;
  weight: string;
  lastUpdate: string;
  milestones: ShipmentMilestone[];
}

export interface ShipmentStat {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  accent: 'teal' | 'blue' | 'amber' | 'red';
}

export interface ShipmentAlert {
  title: string;
  detail: string;
  severity: 'normal' | 'warning' | 'critical';
}
