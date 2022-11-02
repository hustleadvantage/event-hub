type GetStructuredContentResponse = Eventbrite.StructuredContent;

export const handler =
  (request: EventbriteInternal.Request) => (eventId: string) => {
    return request<GetStructuredContentResponse>(
      `/events/${eventId}/structured_content/`,
      {
        method: 'GET',
      }
    );
  };
