import {
  getStructuredContent,
  getByOrganization,
  getBySeries,
  retrieve,
} from './use-cases';

export const events = (request: EventbriteInternal.Request) => ({
  getStructuredContent: getStructuredContent(request),
  getByOrganization: getByOrganization(request),
  getBySeries: getBySeries(request),
  retrieve: retrieve(request),
});
