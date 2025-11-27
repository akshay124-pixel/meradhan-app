import { EconomicEvent } from "@/types";

// Mock Economic Events Data
export const mockEconomicEvents: EconomicEvent[] = [
  {
    id: "1",
    time: "12:00",
    country: "JPN",
    countryCode: "JP",
    event: "BoJ Monetary Policy Meeting Minutes",
    importance: 2,
    isFavorite: false,
    actual: "72",
    forecast: "60",
    previous: "65",
  },
  {
    id: "2",
    time: "12:00",
    country: "JPN",
    countryCode: "JP",
    event: "BoJ Monetary Policy Meeting Minutes",
    importance: 2,
    isFavorite: false,
  },
  {
    id: "3",
    time: "12:00",
    country: "JPN",
    countryCode: "JP",
    event: "BoJ Monetary Policy Meeting Minutes",
    importance: 2,
    isFavorite: false,
  },
  {
    id: "4",
    time: "12:00",
    country: "JPN",
    countryCode: "JP",
    event: "BoJ Monetary Policy Meeting Minutes",
    importance: 2,
    isFavorite: false,
  },
  {
    id: "5",
    time: "12:00",
    country: "JPN",
    countryCode: "JP",
    event: "BoJ Monetary Policy Meeting Minutes",
    importance: 2,
    isFavorite: false,
  },
];

// Function to get events by date filter
export function getEventsByFilter(filter: string): EconomicEvent[] {
  // In a real app, this would filter based on the actual date
  // For now, return mock data
  return mockEconomicEvents;
}

// Function to get events by date
export function getEventsByDate(date: Date): EconomicEvent[] {
  // In a real app, this would fetch events for a specific date
  return mockEconomicEvents;
}

// Function to toggle favorite
export function toggleEventFavorite(eventId: string): void {
  // In a real app, this would update the favorite status in the backend
  console.log(`Toggling favorite for event ${eventId}`);
}
