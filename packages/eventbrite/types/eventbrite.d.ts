declare namespace Eventbrite {
  type Config = {
    key: string;
  };

  type Event = {
    id: string;
    capacity: number;
    description: Event.Description;
    hide_start_date: boolean;
    hide_end_date: boolean;
    is_free: boolean;
    is_reserved_seating: boolean;
    is_series: boolean;
    is_series_parent: boolean;
    logo: Event.Image;
    name: Event.Name;
    online_event: boolean;
    end: Event.DateInfo;
    start: Event.DateInfo;
    status: Event.Status;
    summary: string;
    ticket_availability: Event.TicketAvailability;
    url: string;
    venue: Event.Venue | null;
  };

  namespace Event {
    type DateInfo = { local: string; timezone: string; utc: string };

    type Description = { text: string };

    type Image = {
      aspect_ratio: number;
      original: {
        height: number;
        width: number;
        url: string;
      };
    };

    type Name = { text: string };

    type Status = 'completed' | 'draft' | 'ended' | 'live' | 'started';

    type TicketAvailability = {
      has_available_tickets: boolean;
      is_sold_out: boolean;
      minimum_ticket_price: TicketPrice;
      maximum_ticket_price: TicketPrice;
    } | null;

    type TicketPrice = {
      currency: string;
      display: string;
      major_value: string;
      value: number;
    };

    type Venue = {
      address: Venue.Address;
      name: string;
    };

    namespace Venue {
      type Address = {
        address_1: string;
        address_2?: string;
        city: string;
        region: string;
        postal_code: string;
        country: string;
        latitude: string;
        longitude: string;
        localized_address_display: string;
      };
    }
  }
}
