type DateTimeInfo = EventListPage.Event.DateTimeInfo;

const isDate = (
  dateTimeInfo: DateTimeInfo
): dateTimeInfo is EventListPage.Event.Date => dateTimeInfo._type === 'date';

const isDateTime = (
  dateTimeInfo: DateTimeInfo
): dateTimeInfo is EventListPage.Event.DateTime =>
  dateTimeInfo._type === 'date_time';

const isSeries = (
  event: EventListPage.Event
): event is EventListPage.EventSeries => event._type === 'series';

export const useDateTimeInfoViewModel = () => {
  return {
    isDate,
    isDateTime,
    isSeries,
  };
};
