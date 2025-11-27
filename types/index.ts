// Economic Event Types
export interface EconomicEvent {
  id: string;
  time: string;
  country: string;
  countryCode: string;
  event: string;
  importance: 1 | 2 | 3;
  isFavorite?: boolean;
  actual?: string;
  forecast?: string;
  previous?: string;
}

// Calendar Types
export interface CalendarDay {
  date: number;
  month: number;
  year: number;
  isCurrentMonth: boolean;
  hasEvents?: boolean;
}

// Filter Types
export type DateFilterType = 
  | "Yesterday" 
  | "Today" 
  | "Tomorrow" 
  | "This Week" 
  | "Next Week" 
  | "This Month";

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
}

// Newsletter Types
export interface NewsletterFormData {
  email: string;
}

// Footer Link Types
export interface FooterSection {
  title: string;
  links: NavItem[];
}
