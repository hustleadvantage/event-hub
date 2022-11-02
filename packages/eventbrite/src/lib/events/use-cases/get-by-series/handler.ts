type Response = {
  pagination: any;
  events: Eventbrite.Event[];
};

export const handler =
  (request: EventbriteInternal.Request) => (eventSeriesId: string) => {
    return request<Response>(
      `/series/${eventSeriesId}/events/?time_filter=current_future&expand=ticket_availability,venue`,
      {
        method: 'GET',
      }
    );
  };
