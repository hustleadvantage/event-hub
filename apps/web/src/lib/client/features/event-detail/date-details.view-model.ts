export const useDateDetailsViewModel = () => {
	const isDate = (dateDetails: App.Event.DateDetails): dateDetails is App.SingleEvent.Date =>
		dateDetails._type === 'date';

	const isDateTime = (
		dateDetails: App.Event.DateDetails
	): dateDetails is App.SingleEvent.DateTime => dateDetails._type === 'date_time';

	const isDateAndTimes = (
		dateDetails: App.Event.DateDetails
	): dateDetails is App.SingleEvent.DateAndTimes => dateDetails._type === 'date_times';

	const isDatesAndTimes = (
		dateDetails: App.Event.DateDetails
	): dateDetails is App.SingleEvent.DateAndTimes => dateDetails._type === 'dates_times';

	return {
		isDate,
		isDateTime,
		isDateAndTimes,
		isDatesAndTimes
	};
};
