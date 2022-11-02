type RetrieveEventResponse = Eventbrite.Event;

export const handler =
  (request: EventbriteInternal.Request) => (eventId: string) => {
    return request<RetrieveEventResponse>(
      `/events/${eventId}/?expand=venue,organizer,ticket_availability`,
      {
        method: 'GET',
      }
    );
  };
