type Location = App.Event.Location;

const isLocationToBeAnnounced = (location: Location): location is App.Event.LocationToBeAnnounced =>
	location._type === 'to_be_announced';

const isOnlineLocation = (location: Location): location is App.Event.OnlineLocation =>
	location._type === 'online';

const isRawLocation = (location: Location | string): location is string =>
	typeof location === 'string';

const isVenue = (location: Location): location is App.Event.Venue => location._type === 'venue';

export const useLocationViewModel = () => {
	return {
		isLocationToBeAnnounced,
		isOnlineLocation,
		isRawLocation,
		isVenue
	};
};
