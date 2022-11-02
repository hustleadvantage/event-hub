export type GetEventsByOrganizationResponse = {
  pagination: any;
  events: Eventbrite.Event[];
};

export const handler =
  (request: EventbriteInternal.Request) => (organizationId: string) => {
    return request<GetEventsByOrganizationResponse>(
      `/organizations/${organizationId}/events/?expand=venue,ticket_availability&time_filter=current_future&status=live&order_by=start_asc&show_series_parent=true`,
      {
        method: 'GET',
      }
    );
  };
