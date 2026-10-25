export type Language = 'en' | 'id';

export interface Finding {
  id: string;
  title: string;
  severity: 'critical' | 'high' | 'medium' | 'low' | 'info';
  category: string;
  host: string;
  cve?: string;
  timeAgo: string;
  status: 'open' | 'investigating' | 'resolved';
}

export interface IncidentItem {
  id: string;
  host: string;
  type: 'defacement' | 'gambling' | 'seo-spam';
  title: string;
  snippet: string;
  caughtAt: string;
  severity: 'critical' | 'high';
}

export interface AssetGroup {
  id: string;
  name: string;
  domain: string;
  rating: 'A' | 'B' | 'C' | 'D' | 'F';
  assetsCount: number;
  openVulns: number;
  criticalCount: number;
}
